# SpaceX-Dragons
# Settings

The first step to get started is to set up the server side. First, you need to create an .env file and fill it with the example
```
PORT=5000
DB_URL=<database_url>
JWT_ACCESS_SECRET=<any_secret_phrase>
JWT_REFRESH_SECRET=<any_another_secret_phrase>
```
*For the mail service to work, you also need to enter a mail account*
```
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER=<email_address>
SMTP_PASSWORD=<email_password>
```
*You also need to configure the addresses on which the client and server are running.*
```
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

**Example of .env file**
```
PORT=5000
DB_URL=mongodb+srv://<username>:<password>@connectionstring
JWT_ACCESS_SECRET=jwt-secret-key
JWT_REFRESH_SECRET=jwt-refresh-secret-key
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER=asd@gmail.com
SMTP_PASSWORD=asd123
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

# Application launch
**Server start**
To do this, write the following in the terminal
```
cd server
npm i
node index
```

**Client start**
To do this, write the following in new terminal
```
cd client
npm i
npm start
```
