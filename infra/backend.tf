terraform {
  backend "azurerm" {
    resource_group_name  = "anavaradhacodes"
    storage_account_name = "anavaradhacodes"
    container_name       = "terraform-state"
    key                  = "terraform.tfstate"
  }
}