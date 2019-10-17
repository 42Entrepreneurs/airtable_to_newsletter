var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appkTlqcgqg51vl5o');

base('Students').select({
    // Selecting the first 10 records in Grid view:
    maxRecords: 20,
    view: "New talents",
    sort: [{field: 'created_time', direction: 'desc'}]
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(
        '\n',
        '\n',
        '\n',
        '🧑',
        record.get('Name'),
        "\n",
        '👤  42 Login:',
        record.get('Login'),
        "\n",
        '💻  Technology:',
        record.get('Technology'),
        "\n",
        "📧 ",
        record.get('Email'),
        "\n",
        "📞 ",
        record.get('Phone Number'),
        "\n",
        '🔗  Online portfolio:',
        record.get('Online portfolio'),
        "\n",
        "🔗  Linkedin",
        record.get('Linkedin url'),
        "\n",
        "🎓  42 level:",
        record.get('42 level?'),
        "\n",
        "🖋  Contract:",
        record.get('What contract are you looking for?'),
        "\n",
        "🤚  Motivations:",
        record.get('What motivates you to work in a startup?'),
        "\n",
        "🗝  Experience:",
        record.get('Experience on each technology you want to work on'),
        "\n",
        "💰  Compensation:",
        record.get('What compensation are you looking for?'),
        "\n",
        "📍  Where:",
        record.get('Where do you want to be based?'),
        "\n",
        "🏫  Which campus:",
        record.get('Which campus are you from?'),
        );
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});