terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.0"
    }
  }
  
  required_version = ">= 0.12"
}



provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "resource_group" {
  name     = "anavaradhaCodes" # Change this to your desired resource group name
  location = "West Europe"                  # Choose your preferred region
}


# Create a storage account
resource "azurerm_storage_account" "storage_account" {
  name                     = "anavaradhacodes"
  resource_group_name      = azurerm_resource_group.resource_group.name
  location                 = azurerm_resource_group.resource_group.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
}

resource "azurerm_storage_blob" "blob" {
  name = "index.html"
  storage_account_name = azurerm_storage_account.storage_account.name
  storage_container_name = "$web"
  type = "Block"
}