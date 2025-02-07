CREATE TABLE `gate_access_codes` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`access_code` text NOT NULL,
	`is_temporary` integer DEFAULT false,
	`valid_from` text,
	`valid_until` text,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gate_activity_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`gate_id` text NOT NULL,
	`customer_id` text,
	`access_code_id` text,
	`activity_type` text NOT NULL,
	`access_method` text NOT NULL,
	`timestamp` text DEFAULT 'CURRENT_TIMESTAMP',
	`success` integer NOT NULL,
	`failure_reason` text,
	FOREIGN KEY (`gate_id`) REFERENCES `gates`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`access_code_id`) REFERENCES `gate_access_codes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gate_group_gates` (
	`gate_group_id` text NOT NULL,
	`gate_id` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`gate_group_id`) REFERENCES `gate_groups`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`gate_id`) REFERENCES `gates`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gate_groups` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gates` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`access_name` text,
	`gate_type` text NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`phone_number` text,
	`cloud_node_id` text,
	`requires_access_name` integer DEFAULT false,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `addresses` (
	`id` text PRIMARY KEY NOT NULL,
	`address_type` text NOT NULL,
	`address_line1` text NOT NULL,
	`address_line2` text,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`zip` text NOT NULL,
	`phone` text,
	`website` text,
	`is_primary` text DEFAULT 'false',
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `audit_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`entity_type` text NOT NULL,
	`entity_id` text NOT NULL,
	`action` text NOT NULL,
	`old_values` text,
	`new_values` text,
	`ip_address` text,
	`user_agent` text,
	`timestamp` text DEFAULT 'CURRENT_TIMESTAMP',
	`performed_by` text,
	FOREIGN KEY (`performed_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `blog_categories` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `blog_categories_slug_unique` ON `blog_categories` (`slug`);--> statement-breakpoint
CREATE TABLE `blog_post_categories` (
	`post_id` text NOT NULL,
	`category_id` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`post_id`) REFERENCES `blog_posts`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`category_id`) REFERENCES `blog_categories`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `blog_post_revisions` (
	`id` text PRIMARY KEY NOT NULL,
	`post_id` text NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`summary` text,
	`meta_keywords` text,
	`meta_description` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`post_id`) REFERENCES `blog_posts`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `blog_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`summary` text,
	`body` text NOT NULL,
	`meta_keywords` text,
	`meta_description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`published_at` text,
	`featured_image_url` text,
	`is_featured` integer DEFAULT false,
	`view_count` integer DEFAULT 0,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `blog_posts_slug_unique` ON `blog_posts` (`slug`);--> statement-breakpoint
CREATE TABLE `communication_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`notification_email` text,
	`reply_to_email` text,
	`from_email` text,
	`display_name` text,
	`reminder_period` integer DEFAULT 7,
	`notify_credit_card_payment` integer DEFAULT true,
	`notify_tenant_visits` integer DEFAULT true,
	`print_invoice_barcodes` integer DEFAULT true,
	`print_format` text DEFAULT 'letter',
	`permit_number` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `letter_templates` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`email_subject` text,
	`email_content` text,
	`sms_content` text,
	`postcard_content` text,
	`template_type` text NOT NULL,
	`is_active` integer DEFAULT true,
	`available_placeholders` text,
	`category` text,
	`last_used_at` text,
	`usage_count` integer DEFAULT 0,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sms_messages` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`phone_number` text NOT NULL,
	`message_content` text NOT NULL,
	`direction` text NOT NULL,
	`status` text NOT NULL,
	`third_party_message_id` text,
	`error_message` text,
	`sent_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`delivered_at` text,
	`created_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `template_variables` (
	`id` text PRIMARY KEY NOT NULL,
	`template_id` text NOT NULL,
	`variable_name` text NOT NULL,
	`default_value` text,
	`is_required` integer DEFAULT false,
	`description` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`template_id`) REFERENCES `letter_templates`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `custom_field_values` (
	`id` text PRIMARY KEY NOT NULL,
	`custom_field_id` text NOT NULL,
	`customer_id` text NOT NULL,
	`value` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`custom_field_id`) REFERENCES `custom_fields`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `custom_fields` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`field_type` text NOT NULL,
	`options` text,
	`required_on_signup` integer DEFAULT false,
	`show_on_signup` integer DEFAULT false,
	`is_active` integer DEFAULT true,
	`display_order` integer DEFAULT 0,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `prorating_options` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`prorate_type` text NOT NULL,
	`calculation_method` text NOT NULL,
	`is_default` integer DEFAULT false,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `rate_management_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`is_enabled` integer DEFAULT false,
	`reminder_day_of_month` integer DEFAULT 0,
	`round_unit_type_price_to_dollar` integer DEFAULT false,
	`round_rental_price_to_dollar` integer DEFAULT false,
	`advance_notice_days` integer DEFAULT 0,
	`allow_exceed_street_rate` integer DEFAULT false,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `customer_additional_access` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`name` text,
	`phone_number` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `customer_boat_motors` (
	`id` text PRIMARY KEY NOT NULL,
	`boat_id` text NOT NULL,
	`min_or_serial_number` text,
	`horse_power` integer DEFAULT 0,
	`make` text,
	`type` text,
	`estimated_value_cents` integer DEFAULT 0,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`boat_id`) REFERENCES `customer_boats`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `customer_boats` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`tx_number` text,
	`hin_or_serial_number` text,
	`make_model_year_built` text,
	`estimated_value_cents` integer DEFAULT 0,
	`length` integer DEFAULT 0,
	`home_port` text,
	`name` text,
	`documentation` text,
	`is_tenant_registered_owner` integer DEFAULT false,
	`registered_owner_name` text,
	`registered_owner_address` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `customer_trailers` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`license_plate_number` text,
	`state_registered` text,
	`expiration` text,
	`vin_or_serial_number` text,
	`estimated_value_cents` integer DEFAULT 0,
	`insurance_providers` text,
	`policy_number` text,
	`is_tenant_registered_owner` integer DEFAULT false,
	`registered_owner_name` text,
	`registered_owner_address` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `customer_vehicles` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`type` text,
	`make_model_year` text,
	`body_style` text,
	`vin_number` text,
	`license_plate_number` text,
	`state_registered` text,
	`title_number` text,
	`expiration` text,
	`estimated_value_cents` integer DEFAULT 0,
	`insurance_provider` text,
	`policy_number` text,
	`is_tenant_registered_owner` integer DEFAULT false,
	`registered_owner_name` text,
	`registered_owner_address` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `customers` (
	`id` text PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`address` text,
	`city` text,
	`state` text,
	`zip` text,
	`cell_phone` text,
	`email` text,
	`username` text,
	`password` text,
	`disable_customer_login` integer DEFAULT false,
	`profile_picture` text,
	`photo_id` text,
	`date_of_birth` text,
	`drivers_license_expiration` text,
	`military_service` integer DEFAULT false,
	`military_branch` text,
	`military_active_duty` integer DEFAULT false,
	`military_reserve_national_guard_or_texas_state_guard` integer DEFAULT false,
	`property_to_be_stored` text,
	`tax_exempt` integer DEFAULT false,
	`late_fee_exempt` integer DEFAULT false,
	`invoice_note` text,
	`notes` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`last_updated_by` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `customers_email_unique` ON `customers` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `customers_username_unique` ON `customers` (`username`);--> statement-breakpoint
CREATE TABLE `fees` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`amount` integer DEFAULT 0 NOT NULL,
	`fee_type` text NOT NULL,
	`frequency` text,
	`is_taxable` integer DEFAULT false,
	`is_mandatory` integer DEFAULT false,
	`is_refundable` integer DEFAULT false,
	`apply_to_new_rentals` integer DEFAULT true,
	`conditions` text,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `unit_type_fees` (
	`unit_type_id` text NOT NULL,
	`fee_id` text NOT NULL,
	`override_amount` integer,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`unit_type_id`) REFERENCES `unit_types`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`fee_id`) REFERENCES `fees`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `customer_balances` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`amount` integer NOT NULL,
	`balance` integer NOT NULL,
	`type` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`notes` text,
	`created_by` text,
	`reference_id` text,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `invoices` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`rental_id` text,
	`billing_period_start` text NOT NULL,
	`billing_period_end` text NOT NULL,
	`amount_due` integer NOT NULL,
	`amount_paid` integer DEFAULT 0 NOT NULL,
	`status` text NOT NULL,
	`notes` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`id`) ON UPDATE no action ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `insurance_policies` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`policy_number` text NOT NULL,
	`provider` text NOT NULL,
	`coverage_amount` integer NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `late_lien_events` (
	`id` text PRIMARY KEY NOT NULL,
	`rule_id` text NOT NULL,
	`rental_id` text NOT NULL,
	`customer_id` text NOT NULL,
	`status` text NOT NULL,
	`fee_charged` integer DEFAULT 0 NOT NULL,
	`notifications_sent` text,
	`processed_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`processed_by` text,
	FOREIGN KEY (`rule_id`) REFERENCES `late_lien_rules`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`processed_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `late_lien_rules` (
	`id` text PRIMARY KEY NOT NULL,
	`status` text NOT NULL,
	`days_past_due` integer NOT NULL,
	`fee_amount` integer DEFAULT 0 NOT NULL,
	`notification_types` text NOT NULL,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `rental_price_change_batches` (
	`id` text PRIMARY KEY NOT NULL,
	`months_since_update` integer,
	`unit_type_id` text,
	`change_type` text NOT NULL,
	`change_amount` integer NOT NULL,
	`advance_notice_days` integer NOT NULL,
	`affected_rentals_count` integer NOT NULL,
	`scheduled_date` text NOT NULL,
	`status` text NOT NULL,
	`error_message` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text NOT NULL,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `rental_price_changes` (
	`id` text PRIMARY KEY NOT NULL,
	`batch_id` text NOT NULL,
	`rental_id` text NOT NULL,
	`old_price` integer NOT NULL,
	`new_price` integer NOT NULL,
	`status` text NOT NULL,
	`applied_at` text,
	`error_message` text,
	FOREIGN KEY (`batch_id`) REFERENCES `rental_price_change_batches`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `website_image_usage` (
	`id` text PRIMARY KEY NOT NULL,
	`image_id` text NOT NULL,
	`usage_type` text NOT NULL,
	`reference_id` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`image_id`) REFERENCES `website_images`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `website_images` (
	`id` text PRIMARY KEY NOT NULL,
	`filename` text NOT NULL,
	`file_path` text NOT NULL,
	`file_size` integer NOT NULL,
	`mime_type` text NOT NULL,
	`title` text NOT NULL,
	`alt_text` text,
	`width` integer,
	`height` integer,
	`seo_title` text,
	`description` text,
	`usage_count` integer DEFAULT 0,
	`last_used_at` text,
	`tags` text,
	`folder` text DEFAULT 'general',
	`original_filename` text,
	`hash` text,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `notification_preferences` (
	`id` text PRIMARY KEY NOT NULL,
	`notification_type_id` text NOT NULL,
	`email_enabled` integer DEFAULT true,
	`sms_enabled` integer DEFAULT true,
	`print_enabled` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`notification_type_id`) REFERENCES `notification_types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `notification_types` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`category` text NOT NULL,
	`is_active` integer DEFAULT true
);
--> statement-breakpoint
CREATE TABLE `gateway_responses` (
	`id` text PRIMARY KEY NOT NULL,
	`transaction_id` text NOT NULL,
	`response_type` text NOT NULL,
	`is_success` integer DEFAULT false,
	`response_code` text,
	`response_message` text,
	`raw_response` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`transaction_id`) REFERENCES `payment_transactions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `payment_methods` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`provider` text NOT NULL,
	`is_active` integer DEFAULT true,
	`display_name` text NOT NULL,
	`processing_fee_percent` text DEFAULT '0',
	`processing_fee_flat` integer DEFAULT 0,
	`requires_billing_address` integer DEFAULT true,
	`auto_payment_eligible` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `payment_transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`invoice_id` text,
	`payment_method_id` text NOT NULL,
	`stored_payment_method_id` text,
	`amount` integer NOT NULL,
	`processing_fee` integer DEFAULT 0,
	`status` text NOT NULL,
	`gateway_transaction_id` text,
	`gateway_reference` text,
	`error_code` text,
	`error_message` text,
	`metadata` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`processed_at` text,
	`created_by` text,
	`voided_at` text,
	`voided_by` text,
	`void_reason` text,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`invoice_id`) REFERENCES `invoices`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`stored_payment_method_id`) REFERENCES `stored_payment_methods`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`voided_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `stored_payment_methods` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text NOT NULL,
	`payment_method_id` text NOT NULL,
	`token` text NOT NULL,
	`last_four` text,
	`expiry_month` integer,
	`expiry_year` integer,
	`card_brand` text,
	`bank_name` text,
	`account_type` text,
	`is_default` integer DEFAULT false,
	`is_active` integer DEFAULT true,
	`billing_name` text,
	`billing_address` text,
	`billing_city` text,
	`billing_state` text,
	`billing_zip` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `product_inventory_transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`product_id` text NOT NULL,
	`transaction_type` text NOT NULL,
	`quantity` integer NOT NULL,
	`previous_stock` integer NOT NULL,
	`new_stock` integer NOT NULL,
	`unit_price` integer,
	`notes` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`retail_price` integer DEFAULT 0 NOT NULL,
	`tax_rate_id` text,
	`sku` text,
	`current_stock` integer DEFAULT 0,
	`reorder_point` integer DEFAULT 0,
	`reorder_quantity` integer DEFAULT 0,
	`is_active` integer DEFAULT true,
	`is_taxable` integer DEFAULT true,
	`category` text,
	`vendor_id` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`tax_rate_id`) REFERENCES `tax_rates`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);--> statement-breakpoint
CREATE TABLE `promotion_unit_types` (
	`promotion_id` text NOT NULL,
	`unit_type_id` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`promotion_id`) REFERENCES `promotions`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`unit_type_id`) REFERENCES `unit_types`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `promotion_usage` (
	`id` text PRIMARY KEY NOT NULL,
	`promotion_id` text NOT NULL,
	`customer_id` text NOT NULL,
	`rental_id` text NOT NULL,
	`applied_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`discount_amount` integer NOT NULL,
	`created_by` text,
	FOREIGN KEY (`promotion_id`) REFERENCES `promotions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `promotions` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`start_date` text,
	`end_date` text,
	`is_manual` integer DEFAULT true,
	`promo_code` text,
	`is_automatic` integer DEFAULT false,
	`discount_type` text NOT NULL,
	`discount_value` integer NOT NULL,
	`billing_cycles_to_apply` integer DEFAULT 1,
	`apply_immediately` integer DEFAULT true,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `rental_plans` (
	`id` text PRIMARY KEY NOT NULL,
	`unit_type_id` text NOT NULL,
	`name` text NOT NULL,
	`monthly_rate` integer NOT NULL,
	`setup_fee` integer DEFAULT 0,
	`deposit_required` integer DEFAULT false,
	`deposit_amount` integer DEFAULT 0,
	`charge_setup_fee` integer DEFAULT false,
	`setup_fee_tax_rate_id` text,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`unit_type_id`) REFERENCES `unit_types`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `rentals` (
	`id` text PRIMARY KEY NOT NULL,
	`unit_id` text NOT NULL,
	`customer_id` text NOT NULL,
	`move_in_date` text NOT NULL,
	`move_out_date` text,
	`deposit_paid` integer DEFAULT 0 NOT NULL,
	`deposit_refunded` integer DEFAULT 0,
	`deposit_refund_date` text,
	`rental_rate` integer NOT NULL,
	`status` text NOT NULL,
	`lease_term` integer,
	`auto_renew` integer DEFAULT true,
	`notes` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	`terminated_at` text,
	`terminated_by` text,
	`termination_reason` text,
	FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`terminated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `scheduled_actions` (
	`id` text PRIMARY KEY NOT NULL,
	`action_type` text NOT NULL,
	`rental_id` text NOT NULL,
	`scheduled_date` text NOT NULL,
	`notes` text,
	`status` text NOT NULL,
	`completed_at` text,
	`completed_by` text,
	`cancelled_at` text,
	`cancelled_by` text,
	`cancellation_reason` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`rental_id`) REFERENCES `rentals`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`completed_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`cancelled_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `report_executions` (
	`id` text PRIMARY KEY NOT NULL,
	`report_id` text NOT NULL,
	`status` text NOT NULL,
	`start_time` text DEFAULT 'CURRENT_TIMESTAMP',
	`end_time` text,
	`result_path` text,
	`error_message` text,
	`executed_by` text,
	FOREIGN KEY (`report_id`) REFERENCES `saved_reports`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`executed_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `saved_reports` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`report_type` text NOT NULL,
	`parameters` text,
	`schedule` text,
	`last_run` text,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`locale` text DEFAULT 'United States - Dollar ($) - MM/DD/YYYY' NOT NULL,
	`billing_period` integer DEFAULT 1 NOT NULL,
	`time_zone` text DEFAULT 'GMT-05:00 Eastern Time (US & Canada)' NOT NULL,
	`phone_number_format` text DEFAULT '(XXX) XXX-XXXX' NOT NULL,
	`unit_dimension_format` text DEFAULT 'W" x L" x H"' NOT NULL,
	`enable_storage_for_customers` integer DEFAULT true,
	`enable_partial_prepayments` integer DEFAULT true,
	`save_unsent_customer_emails` integer DEFAULT true,
	`auto_acknowledge_rentals` integer DEFAULT true,
	`enable_additional_deposits` integer DEFAULT true,
	`customers_can_edit_profile` integer DEFAULT true,
	`customers_can_edit_billing` integer DEFAULT true,
	`customers_can_schedule_move_out` integer DEFAULT true,
	`require_approval_automatic_lockout` integer DEFAULT true,
	`require_approval_manual_lockout` integer DEFAULT true,
	`reservation_limit` integer DEFAULT 0,
	`customer_rental_preview_months` integer DEFAULT 3,
	`default_preview_months` integer DEFAULT 3,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `task_relationships` (
	`parent_task_id` text NOT NULL,
	`child_task_id` text NOT NULL,
	`relationship_type` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`parent_task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`child_task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`due_date` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`priority` text DEFAULT 'medium',
	`assigned_to` text,
	`assigned_by` text,
	`completed_at` text,
	`completed_by` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`assigned_to`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`assigned_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`completed_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tax_rates` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`rate` text NOT NULL,
	`description` text,
	`is_active` integer DEFAULT true,
	`applies_to` text NOT NULL,
	`effective_from` text,
	`effective_until` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `template_letter_send_records` (
	`id` text PRIMARY KEY NOT NULL,
	`batch_id` text NOT NULL,
	`customer_id` text NOT NULL,
	`email` text,
	`phone` text,
	`unit_number` text,
	`locked_out_date` text,
	`auction_date` text,
	`sent_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`status` text NOT NULL,
	`error_message` text,
	FOREIGN KEY (`batch_id`) REFERENCES `template_letter_sends`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `template_letter_sends` (
	`id` text PRIMARY KEY NOT NULL,
	`template_id` text NOT NULL,
	`send_type` text NOT NULL,
	`filter_criteria` text,
	`total_recipients` integer DEFAULT 0 NOT NULL,
	`successful_sends` integer DEFAULT 0,
	`failed_sends` integer DEFAULT 0,
	`started_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`completed_at` text,
	`status` text NOT NULL,
	`created_by` text NOT NULL,
	FOREIGN KEY (`template_id`) REFERENCES `letter_templates`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `unit_gate_groups` (
	`unit_id` text NOT NULL,
	`gate_group_id` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`gate_group_id`) REFERENCES `gate_groups`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `unit_custom_fields` (
	`id` text PRIMARY KEY NOT NULL,
	`unit_id` text NOT NULL,
	`field_name` text NOT NULL,
	`field_value` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `unit_types` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`length` integer DEFAULT 0 NOT NULL,
	`width` integer DEFAULT 0 NOT NULL,
	`height` integer DEFAULT 0 NOT NULL,
	`agreement_id` text,
	`price` integer DEFAULT 0 NOT NULL,
	`reservation_price` integer DEFAULT 0 NOT NULL,
	`setup_fee` integer DEFAULT 0 NOT NULL,
	`setup_fee_name` text,
	`deposit` integer DEFAULT 0 NOT NULL,
	`rent_tax_rate` integer DEFAULT false,
	`setup_fee_tax_rate` integer DEFAULT false,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `units` (
	`id` text PRIMARY KEY NOT NULL,
	`name_or_number` text NOT NULL,
	`unit_type_id` text NOT NULL,
	`assign_customer_access_code` integer DEFAULT true,
	`notes` text,
	`unit_status` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`unit_type_id`) REFERENCES `unit_types`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`phone_number` text NOT NULL,
	`password_hash` text NOT NULL,
	`home_page` text DEFAULT 'Dashboard' NOT NULL,
	`role` text NOT NULL,
	`is_owner` integer DEFAULT false,
	`is_active` integer DEFAULT true,
	`last_login` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `vendors` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`contact_person` text,
	`email` text,
	`phone` text,
	`address` text,
	`city` text,
	`state` text,
	`zip` text,
	`is_active` integer DEFAULT true,
	`notes` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `waiting_list_contacts` (
	`id` text PRIMARY KEY NOT NULL,
	`waiting_list_id` text NOT NULL,
	`contact_type` text NOT NULL,
	`contact_result` text NOT NULL,
	`notes` text,
	`contacted_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`contacted_by` text NOT NULL,
	FOREIGN KEY (`waiting_list_id`) REFERENCES `waiting_list`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`contacted_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `waiting_list` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_id` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`cell_phone` text NOT NULL,
	`accepts_text_messages` integer DEFAULT false,
	`is_new_customer` integer DEFAULT true,
	`desired_unit_type_id` text NOT NULL,
	`desired_move_in_date` text NOT NULL,
	`notes` text,
	`status` text DEFAULT 'active' NOT NULL,
	`position` integer,
	`last_contacted_at` text,
	`contact_attempts` integer DEFAULT 0,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`desired_unit_type_id`) REFERENCES `unit_types`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `website_navigation` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`link_type` text NOT NULL,
	`page_id` text,
	`external_url` text,
	`display_section` text DEFAULT 'main_menu',
	`position` integer DEFAULT 0,
	`parent_id` text,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`page_id`) REFERENCES `website_pages`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`parent_id`) REFERENCES `website_navigation`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `website_pages` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`content` text,
	`meta_description` text,
	`meta_keywords` text,
	`is_published` integer DEFAULT false,
	`page_order` integer DEFAULT 0,
	`parent_page_id` text,
	`template` text,
	`tab_name` text,
	`tab_visibility` text DEFAULT 'hidden',
	`footer_button_text` text,
	`login_form_link_text` text,
	`widgets_enabled` integer DEFAULT false,
	`last_published_at` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`created_by` text,
	`last_updated_by` text,
	FOREIGN KEY (`parent_page_id`) REFERENCES `website_pages`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`last_updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `website_pages_slug_unique` ON `website_pages` (`slug`);--> statement-breakpoint
CREATE TABLE `website_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`setting_key` text NOT NULL,
	`setting_value` text,
	`setting_group` text NOT NULL,
	`description` text,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP',
	`updated_by` text,
	FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `website_settings_setting_key_unique` ON `website_settings` (`setting_key`);