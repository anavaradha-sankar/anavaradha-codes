provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "anavaradhacodes_rg" {
  name     = "anavaradhaCodesResourceGroup"  # Change this to your desired resource group name
  location = "West Europe"       # Choose your preferred region
}

resource "azurerm_static_site" "anavaradhacodes_site" {
  name                = "anavaradha-codes-site"  # Change this to your desired app name
  resource_group_name = azurerm_resource_group.my_resource_group.name
  location            = azurerm_resource_group.my_resource_group.location

  sku_tier            = "Free"                    # Use Free tier
  repository_url      = "https://github.com/YourGitHubUser/YourRepo"  # Update with your GitHub repo URL
  branch              = "main"
  app_location        = "/"                         # Root directory for a React app

  # Specify the location of the build output folder (usually 'build' for React apps)
  output_location     = "build"                    # Change this if your build folder is different
}