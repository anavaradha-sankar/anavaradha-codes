# variables.tf
variable "azure_client_id" {
  description = "Azure Client ID"
}

variable "azure_client_secret" {
  description = "Azure Client Secret"
}

variable "azure_tenant_id" {
  description = "Azure Tenant ID"
}

variable "azure_subscription_id" {
  description = "Azure Subscription ID"
}

variable "location" {
  description = "Azure Resource Location"
  default     = "West Europe" # You can set this based on your requirement
}

variable "storage_account_name" {
  description = "Name of the Azure Storage Account"
  type        = string
}
