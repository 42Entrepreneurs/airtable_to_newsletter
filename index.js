var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appkTlqcgqg51vl5o');

base('Students').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(
        '\n',
        '\n',
        '\n',
        record.get('Name'),
        '\n',
        '👨💻Technology:',
        record.get('Technology'),
        '\n',
        '🔗Online portfolio:',
        record.get('Online portfolio'),
        "\n",
        "📧Email",
        record.get('Email'),
        "\n",
        "📞Phone Number",
        record.get('Phone Number'),
        "\n",
        "🔗Linkedin url",
        record.get('Linkedin url'),
        "\n",
        "🎓42 level?",
        record.get('42 level?'),
        "\n",
        "🖋What contract are you looking for?",
        record.get('What contract are you looking for?'),
        "\n",
        "🤚🏻Motivations to work in a startup?",
        record.get('What motivates you to work in a startup?'),
        "\n",
        "Experience on each technology you want to work on?",
        record.get('Experience on each technology you want to work on'),
        "\n",
        "💰What compensation are you looking for?",
        record.get('What compensation are you looking for?'),
        "\n",
        "Where do you want to be based?",
        record.get('Where do you want to be based?'),
        "\n",
        "🏫Which campus are you from?",
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