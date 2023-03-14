# eLedger
A simple expense manager for tracking expenditures.

## Run

To run this application, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/ibrahimm02/eLedger
cd eLedger
```

2. Create a .env file with the following contents:

```sh
DB_HOST=HOST 		// localhost  or  cloudDB  endpoint
DB_DATABASE=DBNAME 	// eledgerdb
DB_USER=DBUSERNAME 	// username
DB_PASS=DBPASSWORD 	// password
DB_PORT=DBPORT 		// 3306
```
Replace the DB_HOST, DB_DATABASE, DB_USER, DB_PASS and DB_PORT with your database details

3. Build the Docker image:

```sh
docker build -t eledger .
```

4. Run the Docker container:

```sh
docker run -p 8080:8080 eledger
```

The application should now be running and can be accessed at http://localhost:8080.

Check running containers using 
```sh 
docker ps
```

## Contributing

Contributions are always welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License. For more information, see the LICENSE file.


