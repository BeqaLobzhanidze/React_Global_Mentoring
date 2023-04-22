const Genres = [
    {
      id:1,
      name: 'ALL'
    },
    {
      id:2,
      name: 'DOCUMENTARY'
    },
    {
      id:3,
      name: 'COMEDY'
    },
    {
      id:4,
      name: 'HORROR'
    },
    {
      id:5,
      name: 'ANIMATION'
    }
  ]

const MovieINFO = [
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers2',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers3',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers4',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers5',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers6',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      title: 'Avengers7',
      release_date: "2018-02-07",
      genres: ['horror' , 'adventure' , 'comedy']
    }
]

const MovieDetailINFO = {
  poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
  title: 'Avengers',
  release_date: "2018-02-07",
  genres: ['horror' , 'adventure' , 'comedy'],
  vote_average: 8.9,
  runtime: 106,
  overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`
}

const sortCriterion = [
  {
    id:0,
    value: "release_date",
    name: "RELEASE DATE"
  },
  {
    id:1,
    value:"title",
    name: "TITLE"
  }
]

export default { Genres , MovieDetailINFO , MovieINFO , sortCriterion }