

export default async function (req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phoneNumber, message } = req.body;
      
      // Call the createGHLContact function
      console.log(data)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `${process.env.GHL_API_KEY}`);
    
      var raw = JSON.stringify({
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "phone": data.phone,
        tags: [
          "newClient"
      ],
      });
    
    
      fetch("https://rest.gohighlevel.com/v1/contacts/", {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
      // Respond with success message or status code
      res.status(200).json({ message: 'Contact created successfully' });
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
