(function ($) {

	$.fn.plainTextEmail = function (options) {

		var defaults = {
			email: '',
			localPart: '',
			domain: '',
			topLevel: 'com',
			innerHtml: ''
		};

		options = $.extend(defaults, options);

		return this.each(function () {

			var arr, email, innerHtml, tagName, href, a;
			var $this = $(this);

			// check requirements
			if ((!options.localPart || !options.domain) && !options.email) {
				return false;
			}

			// construct email address
			if (options.localPart && options.domain) {
				arr = [options.localPart, '@', options.domain, '.', options.topLevel];
				email = arr.join('');
			} else {
				email = options.email;
			}

			// set innerHtml
			if (!options.innerHtml) {
				innerHtml = email;
			} else {
				innerHtml = options.innerHtml;
			}

			// set element
			tagName = $this.get(0).tagName.toLowerCase();
			href = 'mailto:' + email;
			if (tagName === 'a') {
				$this.attr('href', href).html(innerHtml);
			} else {
				a = $('<a>', {href: href, text: innerHtml});
				$this.empty().append(a);
			}
		});
	};
}(jQuery));
