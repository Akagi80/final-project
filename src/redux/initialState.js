export const initialState = {
  projects: {
    data: [
      {
        id: 1,
        photo: 'https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg',
        client: 'Michał',
        from: 'Warszawa',
      },
      {
        id: 2,
        photo: 'https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg',
        client: 'Agnieszka',
        from: 'Krakowa',
      },
      {
        id: 3,
        photo: 'https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg',
        client: 'Adam',
        from: 'Wrocław',
      },
    ],

    loading: {
      active: false,
      error: false,
    },
  },
};
