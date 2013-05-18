describe("plainTextEmail", function () {

	it("should set email from options", function () {
		var a = $('<a href="email">email</a>').plainTextEmail({localPart: 'mail', domain: 'example'});
		expect(a).toContainText('mail@example.com');
		expect(a).toHaveAttr('href', 'mailto:mail@example.com');
	});

	it("should set TLD", function () {
		var a = $('<a href="email">email</a>').plainTextEmail({localPart: 'mail', domain: 'example', topLevel: 'nl'});
		expect(a).toContainText('mail@example.nl');
		expect(a).toHaveAttr('href', 'mailto:mail@example.nl');
	});

	it("should set email", function () {
		var a = $('<a href="email">email</a>').plainTextEmail({email: 'test@example.com'});
		expect(a).toContainText('test@example.com');
		expect(a).toHaveAttr('href', 'mailto:test@example.com');
	});

	it("should set innerHTML", function () {
		var a = $('<a href="email">email</a>').plainTextEmail({email: 'test@example.com', innerHtml: 'contact me'});
		expect(a).toContainText('contact me');
		expect(a).toHaveAttr('href', 'mailto:test@example.com');
	});
});
