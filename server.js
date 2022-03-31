const express = require('express')
const app = express()

const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5500

//Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'clubtest20@gmail.com',
      pass: 'Password2000',
    },
  })

  const mailOptions = {
    from: req.body.email,
    to: 'clubtest20@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: ` Name is ${req.body.name}\n StudentID is ${req.body.sID} \n Phone Number is ${req.body.phoneNum} \n Email is ${req.body.email}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.log(error)
      res.send('error')
    } else {
      // console.log('Email sent: ' + info.response)
      res.send('success')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
