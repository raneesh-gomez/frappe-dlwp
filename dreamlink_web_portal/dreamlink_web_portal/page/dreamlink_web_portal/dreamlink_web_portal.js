frappe.pages["dreamlink-web-portal"].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Dreamlink Web Portal"),
		single_column: true,
	});

	// Add the page to frappe
	frappe.dreamlink_web_portal_page = page;
	$(frappe.render_template("dreamlink_web_portal", {})).appendTo(page.body);

	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	// Load the React bundle and render
	frappe.require("dreamlink_web_portal.bundle.js").then(() => {
		const rootElement = document.createElement('div');
		rootElement.id = 'dreamlink-web-portal-root';
		$parent.append(rootElement);
		
		// Initialize React app
		frappe.dreamlink_web_portal = new frappe.ui.DreamlinkWebPortal({
			wrapper: rootElement,
			page: wrapper.page,
		});
	});
}