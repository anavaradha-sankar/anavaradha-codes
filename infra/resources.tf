resource "azurerm_resource_group" "rg" {
  name     = "anavaradha-codes"
  location = var.location
}

resource "azurerm_storage_account" "storage_account" {
  name                     = var.storage_account_name  
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
}

resource "azurerm_storage_blob" "dist_files" {
  count               = length(fileset("${path.module}/../dist", "*"))
  name                = "${fileset("${path.module}/../dist", "*")[count.index]}"
  storage_account_name = azurerm_storage_account.storage_account.name
  storage_container_name = "$web"
  type                = "block"

  source              = "${path.module}/../dist/${fileset("${path.module}/../dist", "*")[count.index]}"
}
