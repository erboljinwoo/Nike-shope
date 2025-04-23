const customers = [
    {
      name: "Nick Wade, New York",
      text: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFCzraVCyyW6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710406801246?e=2147483647&v=beta&t=0WrEkpIU0_sRNqz_KrKIv-gg6gEGb8SoHy9HV1tgPMM"
    },
    {
      name: "Natasha Reyes, California",
      text: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7u8dtYsnMyeq-fkyxp7t_A25d52mBIksQiku9ki3M3zMFs3sqWCDIa5xSpaXxYqF0V0&usqp=CAU"
    },
    {
      name: "Carolyn Banks, Miami",
      text: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGjZhkbJ6rF4A/profile-displayphoto-shrink_200_200/B4EZPFQPwtHAAY-/0/1734181191287?e=2147483647&v=beta&t=TcJsXcIjKuWqv7nnyRb3r13OOPiUKvHhLnxlm4daflk"
    }
  ];
  
  const container = document.getElementById("testimonial-cards");
  
  customers.forEach(customer => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${customer.image}" alt="${customer.name}">
      <p>${customer.text}</p>
      <p class="name">${customer.name}</p>
    `;
    container.appendChild(card);
  });
