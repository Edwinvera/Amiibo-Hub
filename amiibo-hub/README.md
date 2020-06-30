# Amiibo-Hub

**AmiiboHub** Search for release dates, images and other info on your favorite Nintendo characters. Amiibo's are not only collectible figurines but they are also highly functional, having the ability to unlock features that enhance your gameplay.

<br>

### Wireframes

[https://imgur.com/AdOQTNA](url)

- Homepage

[https://imgur.com/1n8QqVg](url)

- Amiibo Page

[https://imgur.com/8gpSLN9](url)

- Amiibo Hub Mobile

[https://imgur.com/drFQ1zF](url)

- Sample Data from console

<br>

### MVP

_**AmiiboHub** Will allow users to search and retrieve data on their favorite Nintendo characters. They'll have the ability to search by character or search by game series._

<br>

#### MVP Goals

- _Search for Amiibo via character name._
- _Search for Amiibo via game series._
- _Access to images and other links for more info._

<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| AmiiboAPI |      yes      | _https://www.amiiboapi.com/docs/_ | _https://www.amiiboapi.com/api/amiibo/?name=mario_ |

Sample Query Results:

```json
{
	"amiibo": [
		{
			"amiiboSeries": "Super Smash Bros.",
			"character": "Mario",
			"gameSeries": "Super Mario",
			"head": "00000000",
			"image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
			"name": "Mario",
			"release": {
				"au": "2014-11-29",
				"eu": "2014-11-28",
				"jp": "2014-12-06",
				"na": "2014-11-21"
			},
			"tail": "00000002",
			"type": "Figure"
		},
		{
			"amiiboSeries": "Super Mario Bros.",
			"character": "Mario",
			"gameSeries": "Super Mario",
			"head": "00000000",
			"image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
			"name": "Mario",
			"release": {
				"au": "2015-03-21",
				"eu": "2015-03-20",
				"jp": "2015-03-12",
				"na": "2015-03-20"
			},
			"tail": "00340102",
			"type": "Figure"
		}
	]
}
```

<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Access to components to display features._ |
| React Router | _Smooth transitions to Amiibo info pages._ |

<br>

#### MVP Components

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ App.jsx
      |__ Nav.jsx
      |__ Amiibo.jsx
      |__ Footer.jsx
      |__ Dropdown.jsx
      |__ Search.jsx
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|     App      |   class    |   y   |   n   |   n   | _Homepage displaying options for search._ |
|     Nav      |   class    |   n   |   n   |   n   | _Links back to home or other parts of the site._ |
|    Amiibo    | functional |   n   |   y   |   n   | _Page that displays Amiibo and stats._ |
|    Footer    |   class    |   n   |   n   |   n   | _Links to different sites relating to nintendo._ |
|   Dropdown   | functional |   y   |   n   |   n   | _Choice of search (character or game series)._ |
|    Search    | functional |   y   |   n   |   n   | _Input for specific character or game series._ |

<br>

#### MVP Timeframes

| Task             | Priority | Estimated Time  | Time Invested | Actual Time |
| ---------------- | :------: | :------------:  | :-----------: | :---------: |
| App              |    H     |     24 hrs      |     0 hrs     |     TBD     |
| Nav & Footer     |    L     |     3 hrs       |     0 hrs     |     TBD     |
| Amiibo           |    H     |     24 hrs      |     0 hrs     |     TBD     |
| Dropdown & Search|    M     |     6 hrs       |     0 hrs     |     TBD     |
| CSS              |    H     |     12 hrs      |     0 hrs     |     TBD     |
| TOTAL            |          |     69 hrs      |     0 hrs     |     TBD     |

<br>

### Post-MVP

- _Gallery of nintendo characters._
- _Information on funtionality of Amiibo's._

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.