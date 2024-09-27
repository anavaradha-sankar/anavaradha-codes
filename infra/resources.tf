resource "azurerm_resource_group" "rg" {
  name     = "anavaradhacodes"
  location = "West Europe"
}

resource "azurerm_storage_account" "sa" {
  name                     = "anavaradhacodes"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
}

resource "azurerm_storage_container" "state_container" {
  name                  = "terraform-state"
  storage_account_name  = azurerm_storage_account.sa.name
  container_access_type = "private"
}