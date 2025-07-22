var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ws-voting-systems",
  "level": "1",
  "url": "ws-voting-systems.html",
  "type": "Worksheet",
  "number": "1.1",
  "title": "Voting Systems",
  "body": " Voting Systems    The Bellevue Taxicab Union is preparing to elect its president. Three members are considering running for president: Alice, Bob, and Charles. Each of the five voters has a first, second, and third choice, as listed in the following table:    Voter:  Voter 1  Voter 2  Voter 3  Voter 4  Voter 5  Voter 6  Voter 7          1st choice:  Alice  Bob  Bob  Carlos  Alice  Carlos  Bob    2nd choice:  Carlos  Alice  Carlos  Alice  Carlos  Alice  Alice    3rd choice:  Bob  Carlos  Alice  Bob  Bob  Bob  Carlos    Depending on who decides to run, the ballot the voters see in the booth will look different. For each of the following ballots, how many votes will each candidate receive? Who will win?     What if the choices on the ballot were Alice, Bob, and Carlos?    Alice: 2 votes Bob: 3 votes Carlos: 2 votes. Winner: Bob      What if the choices on the ballot were Alice and Bob?       Fill in the number of votes for each candidate.     No. of Ballots    Ranking                    1st choice  D  D  E  F  G    2nd choice  G  G  G  G  E    3rd choice  E  F  F  D  F    4th choice  F  E  D  E  D           "
},
{
  "id": "ws-voting-systems-2",
  "level": "2",
  "url": "ws-voting-systems.html#ws-voting-systems-2",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  The Bellevue Taxicab Union is preparing to elect its president. Three members are considering running for president: Alice, Bob, and Charles. Each of the five voters has a first, second, and third choice, as listed in the following table:    Voter:  Voter 1  Voter 2  Voter 3  Voter 4  Voter 5  Voter 6  Voter 7          1st choice:  Alice  Bob  Bob  Carlos  Alice  Carlos  Bob    2nd choice:  Carlos  Alice  Carlos  Alice  Carlos  Alice  Alice    3rd choice:  Bob  Carlos  Alice  Bob  Bob  Bob  Carlos    Depending on who decides to run, the ballot the voters see in the booth will look different. For each of the following ballots, how many votes will each candidate receive? Who will win?     What if the choices on the ballot were Alice, Bob, and Carlos?    Alice: 2 votes Bob: 3 votes Carlos: 2 votes. Winner: Bob      What if the choices on the ballot were Alice and Bob?    "
},
{
  "id": "ws-voting-systems-3",
  "level": "2",
  "url": "ws-voting-systems.html#ws-voting-systems-3",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  Fill in the number of votes for each candidate.     No. of Ballots    Ranking                    1st choice  D  D  E  F  G    2nd choice  G  G  G  G  E    3rd choice  E  F  F  D  F    4th choice  F  E  D  E  D         "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
