const chatsData = [
  {
    id: 1,
    userName: 'Carla Matos',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMessageDate: '22:00',
    lastMessage: 'Hola! ¿Cómo estás?',
    unread: 2,
    status: 'online',
    messages: [
      {
        id: 1,
        userId: '1',
        text: 'Hola! ¿Cómo estás?',
        date: new Date(2022, 9, 13, 10, 30)
      },
      {
        id: 2,
        userId: '2',
        text: 'Estoy bien, gracias. ¿Y tú?',
        date: new Date(2022, 9, 13, 10, 35)
      },
      {
        id: 3,
        userId: '1',
        text: 'Muy bien también. ¿Quieres hacer algo hoy?',
        date: new Date(2022, 9, 13, 10, 40)
      },
      {
        id: 4,
        userId: '2',
        text: 'Sí, me gustaría ir al cine. ¿Te parece bien?',
        date: new Date(2022, 9, 13, 10, 45)
      },
      {
        id: 5,
        userId: '1',
        text: '¡Genial! ¿Qué película quieres ver?',
        date: new Date(2022, 9, 13, 10, 50)
      },
      {
        id: 6,
        userId: '2',
        text: 'No sé, ¿qué tal si vemos la nueva de Marvel?',
        image:
          'https://yt3.googleusercontent.com/ytc/AGIKgqN57AxzPpC5ovohemiRgz7N_PrdPJ2ixgnHwqrqFA=s900-c-k-c0x00ffffff-no-rj',
        date: new Date(2022, 9, 13, 10, 55)
      },
      {
        id: 7,
        userId: '1',
        text: '¡Perfecto! ¿A qué hora nos encontramos?',
        date: new Date(2022, 9, 13, 11, 0)
      }
    ]
  },
  {
    id: 2,
    userName: 'Luis Garcia',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessageDate: '19:10',
    lastMessage: '¡Genial! Gracias por preguntar.',
    unread: 1,
    status: 'online',
    messages: [
      {
        id: 1,
        userId: '2',
        text: 'Hola, ¿cómo estás?',
        date: new Date(2023, 3, 19, 10, 0)
      },
      {
        id: 2,
        userId: '1',
        text: 'Hola, estoy bien. ¿Y tú?',
        date: new Date(2023, 3, 19, 10, 5)
      },
      {
        id: 3,
        userId: '2',
        text: 'Bien también, gracias. ¿Qué planes tienes para hoy?',
        date: new Date(2023, 3, 19, 10, 10)
      },
      {
        id: 4,
        userId: '1',
        text: 'Tengo que ir al supermercado y luego trabajar. ¿Y tú?',
        date: new Date(2023, 3, 19, 10, 15)
      },
      {
        id: 5,
        userId: '2',
        text: 'Voy a ir al gimnasio y luego a la universidad. ¿Quieres que nos encontremos más tarde?',
        date: new Date(2023, 3, 19, 10, 20)
      },
      {
        id: 6,
        userId: '1',
        text: 'Sí, me parece bien. ¿Qué te parece si nos encontramos a las 6pm en el parque?',
        date: new Date(2023, 3, 19, 10, 25)
      },
      {
        id: 7,
        userId: '2',
        text: 'Perfecto, allí nos vemos. ¡Hasta entonces!',
        date: new Date(2023, 3, 19, 10, 30)
      }
    ]
  },
  {
    id: 3,
    userName: 'Ana Perez',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    lastMessageDate: '18:12',
    lastMessage: '¡Claro! Nos vemos a las 3 pm en el café de la esquina.',
    unread: 0,
    status: 'offline',
    messages: [
      {
        id: 1,
        userId: '2',
        text: 'Hola, ¿cómo estás?',
        date: new Date(2023, 3, 18, 12, 0)
      },
      {
        id: 2,
        userId: '1',
        text: '¡Hola! Estoy bien, gracias. ¿Y tú?',
        date: new Date(2023, 3, 18, 12, 5)
      },
      {
        id: 3,
        userId: '2',
        text: 'También estoy bien. ¿Qué planes tienes para hoy?',
        date: new Date(2023, 3, 18, 12, 10)
      },
      {
        id: 4,
        userId: '1',
        text: 'Nada en especial, ¿tienes alguna sugerencia?',
        date: new Date(2023, 3, 18, 12, 15)
      },
      {
        id: 5,
        userId: '2',
        text: 'Podemos ir a caminar por el parque, hace un día hermoso.',
        date: new Date(2023, 3, 18, 12, 20)
      },
      {
        id: 6,
        userId: '1',
        text: '¡Excelente idea! ¿A qué hora nos encontramos?',
        date: new Date(2023, 3, 18, 12, 25)
      },
      {
        id: 7,
        userId: '2',
        text: '¿Qué tal si nos encontramos en la entrada del parque a las 2?',
        date: new Date(2023, 3, 18, 12, 30)
      },
      {
        id: 8,
        userId: '1',
        text: 'Perfecto, allí estaré. ¡Nos vemos!',
        date: new Date(2023, 3, 18, 12, 35)
      }
    ]
  },
  {
    id: 4,
    userName: 'Jorge Mendez',
    image: 'https://randomuser.me/api/portraits/men/27.jpg',
    lastMessageDate: '17:30',
    lastMessage: 'Sí, estoy de acuerdo. Hablamos más tarde.',
    unread: 0,
    status: 'online',
    messages: [
      {
        id: 1,
        userId: '1',
        text: 'Hola, ¿cómo estás?',
        date: new Date(2023, 3, 19, 15, 30)
      },
      {
        id: 2,
        userId: '2',
        text: 'Bien, gracias ¿y tú?',
        date: new Date(2023, 3, 19, 15, 35)
      },
      {
        id: 3,
        userId: '1',
        text: 'Estoy un poco cansado, pero bien. ¿Has visto la nueva película de terror?',
        date: new Date(2023, 3, 19, 15, 40)
      },
      {
        id: 4,
        userId: '2',
        text: 'No, aún no he tenido la oportunidad de verla. ¿Es buena?',
        date: new Date(2023, 3, 19, 15, 45)
      },
      {
        id: 5,
        userId: '1',
        text: 'Sí, es muy buena. Deberías verla cuando puedas.',
        date: new Date(2023, 3, 19, 15, 50)
      },
      {
        id: 6,
        userId: '2',
        text: 'Vale, gracias por la recomendación. ¿Qué planes tienes para hoy?',
        date: new Date(2023, 3, 19, 15, 55)
      },
      {
        id: 7,
        userId: '1',
        text: 'Pues pensaba ir al gimnasio un rato, ¿quieres acompañarme?',
        date: new Date(2023, 3, 19, 16, 0)
      },
      {
        id: 8,
        userId: '2',
        text: 'Lo siento, no puedo hoy. Tengo que ir a una reunión en la tarde.',
        date: new Date(2023, 3, 19, 16, 5)
      },
      {
        id: 9,
        userId: '1',
        text: 'No hay problema. Quizás podamos hacer algo mañana.',
        date: new Date(2023, 3, 19, 16, 10)
      }
    ]
  },
  {
    id: 5,
    userName: 'Laura Gomez',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    lastMessageDate: '17:22',
    lastMessage: '¡Felicidades por tu cumpleaños! ¿Qué planes tienes para celebrar?',
    unread: 0,
    status: 'online',
    messages: [
      {
        id: 1,
        userId: '1',
        text: 'Hola, ¿qué tal estás?',
        date: new Date(2022, 9, 15, 15, 0)
      },
      {
        id: 2,
        userId: '2',
        text: 'Bien, gracias. ¿Y tú?',
        date: new Date(2022, 9, 15, 15, 5)
      },
      {
        id: 3,
        userId: '1',
        text: 'También estoy bien. ¿Has visto la película que te recomendé?',
        date: new Date(2022, 9, 15, 15, 10)
      },
      {
        id: 4,
        userId: '2',
        text: 'Sí, la vi el fin de semana pasado. Me gustó mucho, gracias por la recomendación.',
        date: new Date(2022, 9, 15, 15, 15)
      },
      {
        id: 5,
        userId: '1',
        text: '¡Genial! Me alegra que te haya gustado. ¿Te gustaría ver otra película juntos este fin de semana?',
        date: new Date(2022, 9, 15, 15, 20)
      },
      {
        id: 6,
        userId: '2',
        text: 'Claro, ¿tienes alguna recomendación?',
        date: new Date(2022, 9, 15, 15, 25)
      },
      {
        id: 7,
        userId: '1',
        text: 'Sí, he estado escuchando buenas críticas sobre la nueva película de terror que acaba de salir. ¿Te animas a verla?',
        date: new Date(2022, 9, 15, 15, 30)
      },
      {
        id: 8,
        userId: '2',
        text: 'No sé... no soy muy fan de las películas de terror. ¿Hay alguna otra opción?',
        date: new Date(2022, 9, 15, 15, 35)
      },
      {
        id: 9,
        userId: '1',
        text: 'Sí, también he escuchado buenas críticas sobre la nueva película de comedia romántica. ¿Te animas?',
        date: new Date(2022, 9, 15, 15, 40)
      },
      {
        id: 10,
        userId: '2',
        text: '¡Perfecto! Me encanta la comedias románticas. ¿A qué hora nos encontramos?',
        date: new Date(2022, 9, 15, 15, 45)
      }
    ]
  },
  {
    id: 6,
    userName: 'Pedro Reyes',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    lastMessageDate: '17:01',
    lastMessage: 'De acuerdo, nos vemos mañana en el De acuerdo, nos vemos mañana en el parque a las 9 am para hacer ejercicio juntos.',
    unread: 3,
    status: 'offline',
    messages: [
      {
        id: 1,
        userId: '1',
        text: '¡Hola! ¿Cómo estás?',
        date: new Date(2022, 9, 13, 10, 30)
      },
      {
        id: 2,
        userId: '2',
        text: 'Bien, gracias. ¿Y tú?',
        date: new Date(2022, 9, 13, 10, 35)
      },
      {
        id: 3,
        userId: '1',
        text: 'Estoy bien también. ¿Qué planes tienes para hoy?',
        date: new Date(2022, 9, 13, 10, 40)
      },
      {
        id: 4,
        userId: '2',
        text: 'Pues pensaba ir al parque y hacer un picnic. ¿Te unes?',
        date: new Date(2022, 9, 13, 10, 45)
      },
      {
        id: 5,
        userId: '1',
        text: '¡Qué buena idea! Me encantaría. ¿A qué hora vamos?',
        date: new Date(2022, 9, 13, 10, 50)
      },
      {
        id: 6,
        userId: '2',
        text: '¿Qué tal si nos encontramos a las 12 en la entrada del parque?',
        date: new Date(2022, 9, 13, 10, 55)
      },
      {
        id: 7,
        userId: '1',
        text: 'Perfecto. ¿Qué llevamos para el picnic?',
        date: new Date(2022, 9, 13, 11, 0)
      },
      {
        id: 8,
        userId: '2',
        text: 'Podemos llevar sandwiches, frutas, bebidas y algo de postre. ¿Te parece?',
        date: new Date(2022, 9, 13, 11, 5)
      },
      {
        id: 9,
        userId: '1',
        text: 'Sí, suena bien. Yo puedo llevar las frutas y algo de postre. ¿Tú llevas los sandwiches y las bebidas?',
        date: new Date(2022, 9, 13, 11, 10)
      },
      {
        id: 10,
        userId: '2',
        text: 'Claro, sin problema. Nos vemos a las 12 entonces. ¡Hasta pronto!',
        date: new Date(2022, 9, 13, 11, 15)
      }
    ]
  },
  {
    id: 7,
    userName: 'Marta Gonzalez',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
    lastMessageDate: '16:33',
    lastMessage: '¡Por supuesto! Te lo enviaré por correo electrónico en unos minutos.',
    unread: 0,
    status: 'offline',
    messages: [
      {
        id: 1,
        userId: '1',
        text: '¡Hola! ¿Cómo estás?',
        date: new Date(2022, 9, 13, 15, 0)
      },
      {
        id: 2,
        userId: '2',
        text: '¡Hola! Estoy bien, gracias. ¿Y tú?',
        date: new Date(2022, 9, 13, 15, 5)
      },
      {
        id: 3,
        userId: '1',
        text: 'Estoy bien también. ¿Qué has estado haciendo?',
        date: new Date(2022, 9, 13, 15, 10)
      },
      {
        id: 4,
        userId: '2',
        text: 'He estado trabajando mucho, pero ayer fui al parque con mi familia. Fue muy divertido.',
        date: new Date(2022, 9, 13, 15, 15)
      },
      {
        id: 5,
        userId: '1',
        text: '¡Eso suena genial! ¿Qué actividades hicieron?',
        date: new Date(2022, 9, 13, 15, 20)
      },
      {
        id: 6,
        userId: '2',
        text: 'Jugamos al fútbol, hicimos un picnic y después montamos en bicicleta. Fue un día muy activo.',
        date: new Date(2022, 9, 13, 15, 25)
      },
      {
        id: 7,
        userId: '1',
        text: 'Wow, eso suena como un día muy divertido y lleno de energía. Me alegra que lo hayas disfrutado.',
        date: new Date(2022, 9, 13, 15, 30)
      },
      {
        id: 8,
        userId: '2',
        text: 'Sí, definitivamente fue un gran día. ¿Y tú qué has estado haciendo?',
        date: new Date(2022, 9, 13, 15, 35)
      },
      {
        id: 9,
        userId: '1',
        text: 'He estado trabajando en algunos proyectos personales y también he estado aprendiendo un nuevo idioma.',
        date: new Date(2022, 9, 13, 15, 40)
      },
      {
        id: 10,
        userId: '2',
        text: '¡Impresionante! ¿Qué idioma estás aprendiendo?',
        date: new Date(2022, 9, 13, 15, 45)
      },
      {
        id: 11,
        userId: '1',
        text: 'Estoy aprendiendo francés. Siempre he querido hablar otro idioma y siento que es una habilidad valiosa.',
        date: new Date(2022, 9, 13, 15, 50)
      },
      {
        id: 12,
        userId: '2',
        text: '¡Muy bien! El francés es un idioma muy hermoso y también es útil para viajar a algunos países. Te deseo mucha suerte en tu aprendizaje.',
        date: new Date(2022, 9, 13, 15, 55)
      }
    ]
  },
  {
    id: 8,
    userName: 'David Hernandez',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    lastMessageDate: '16:20',
    lastMessage: '¡Qué buena noticia! Me alegra mucho escuchar eso.',
    unread: 1,
    status: 'offline',
    messages: [
      {
        id: 1,
        userId: '1',
        text: '¡Hola! ¿Cómo has estado?',
        date: new Date(2023, 3, 20, 10, 0)
      },
      {
        id: 2,
        userId: '2',
        text: '¡Hola! He estado bien, gracias. ¿Y tú?',
        date: new Date(2023, 3, 20, 10, 2)
      },
      {
        id: 3,
        userId: '1',
        text: 'Estoy bien también. ¿Qué planes tienes para hoy?',
        date: new Date(2023, 3, 20, 10, 5)
      },
      {
        id: 4,
        userId: '2',
        text: 'Tengo una reunión importante en la mañana y después voy a ir al gimnasio. ¿Y tú?',
        date: new Date(2023, 3, 20, 10, 10)
      },
      {
        id: 5,
        userId: '1',
        text: 'Hoy tengo que trabajar en algunos proyectos, pero después voy a ir a una cita con mi novio.',
        date: new Date(2023, 3, 20, 10, 15)
      },
      {
        id: 6,
        userId: '2',
        text: '¡Qué bien! ¿En qué van a ir?',
        date: new Date(2023, 3, 20, 10, 20)
      },
      {
        id: 7,
        userId: '1',
        text: 'Vamos a ir a un restaurante nuevo que abrieron en el centro.',
        date: new Date(2023, 3, 20, 10, 25)
      },
      {
        id: 8,
        userId: '2',
        text: '¡Suena genial! ¿Cómo se llama el restaurante?',
        date: new Date(2023, 3, 20, 10, 30)
      },
      {
        id: 9,
        userId: '1',
        text: 'Se llama "La Terraza". He oído que es muy bueno.',
        date: new Date(2023, 3, 20, 10, 35)
      },
      {
        id: 10,
        userId: '2',
        text: '¡Qué emocionante! Espero que te diviertas.',
        date: new Date(2023, 3, 20, 10, 40)
      }
    ]
  },
  {
    id: 9,
    userName: 'Cristina Ramos',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
    lastMessageDate: '18:20',
    lastMessage: '¡Sí, estoy emocionada por el viaje! Gracias por organizarnos todo.',
    unread: 0,
    status: 'offline',
    messages: [
      {
        id: 1,
        userId: '1',
        text: 'Hola, ¿qué tal estás?',
        date: new Date(2022, 9, 14, 15, 30)
      },
      {
        id: 2,
        userId: '2',
        text: 'Hola, bien gracias. ¿Y tú?',
        date: new Date(2022, 9, 14, 15, 31)
      },
      {
        id: 3,
        userId: '1',
        text: 'Bien también, ¿qué planes tienes para hoy?',
        date: new Date(2022, 9, 14, 15, 32)
      },
      {
        id: 4,
        userId: '2',
        text: 'No tengo planes todavía, ¿por qué?',
        date: new Date(2022, 9, 14, 15, 35)
      },
      {
        id: 5,
        userId: '1',
        text: 'Pensaba ir al cine, ¿te apetece?',
        date: new Date(2022, 9, 14, 15, 37)
      },
      {
        id: 6,
        userId: '2',
        text: '¡Genial! ¿Qué película quieres ver?',
        date: new Date(2022, 9, 14, 15, 40)
      },
      {
        id: 7,
        userId: '1',
        text: 'La nueva de James Bond, ¿te gusta esa saga?',
        date: new Date(2022, 9, 14, 15, 42)
      },
      {
        id: 8,
        userId: '2',
        text: 'Sí, me gusta, pero ya la he visto. ¿Qué tal si vemos algo de comedia?',
        date: new Date(2022, 9, 14, 15, 45)
      },
      {
        id: 9,
        userId: '1',
        text: 'Vale, ¿qué te parece "La boda de mi mejor amigo"?',
        date: new Date(2022, 9, 14, 15, 47)
      },
      {
        id: 10,
        userId: '2',
        text: '¡Perfecto! ¿A qué hora nos encontramos?',
        date: new Date(2022, 9, 14, 15, 50)
      },
      {
        id: 11,
        userId: '1',
        text: 'A las 7 en el cine del centro, ¿te parece?',
        date: new Date(2022, 9, 14, 15, 52)
      },
      {
        id: 12,
        userId: '2',
        text: '¡De acuerdo! Allí estaré.',
        date: new Date(2022, 9, 14, 15, 55)
      }
    ]
  },
  {
    id: 10,
    userName: 'Pablo Jimenez',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessageDate: '20:12',
    lastMessage: 'No te preocupes, entiendo perfectamente. Hablamos más tarde.',
    unread: 2,
    status: 'offline'
  },
  {
    id: 11,
    userName: 'Lucia Sanchez',
    image: 'https://randomuser.me/api/portraits/women/76.jpg',
    lastMessageDate: '23:21',
    lastMessage: '¡Qué sorpresa agradable! Me encantaría acompañarte.',
    unread: 0,
    status: 'offline'
  },
  {
    id: 12,
    userName: 'Diego Ortiz',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    lastMessageDate: '01:10',
    lastMessage: 'De acuerdo, nos encontramos a las 7 pm en el restaurante italiano.',
    unread: 0,
    status: 'offline'
  },
  {
    id: 13,
    userName: 'Sara Fernandez',
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
    lastMessageDate: '00:10',
    lastMessage: '¡Feliz cumpleaños! Espero que tengas un día maravilloso.',
    unread: 0,
    status: 'offline'
  },
  {
    id: 14,
    userName: 'Javier Garcia',
    image: 'https://randomuser.me/api/portraits/men/57.jpg',
    lastMessageDate: '23:30',
    lastMessage: 'De acuerdo, nos vemos mañana en la estación de autobuses a las 8 am.',
    unread: 1,
    status: 'offline'
  },
  {
    id: 15,
    userName: 'Maria Rodriguez',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    lastMessageDate: '21:14',
    lastMessage: '¡Claro que sí! ¿Qué te parece si nos encontramos en el parque a las 11 am?',
    unread: 0,
    status: 'offline'
  }]

export { chatsData }
