
# Odd Even Distinguishing API

  

POST - `/bfhl`

* Example A

  

		Request

		{

		"numbers": [0,1,2,3,4,5,6,7,8,9]

		}
	
		Response

		{

		"is_success": true,

		"user_id": "john_doe_17091999",

		"odd": [1,3,5,7,9],

		"even": [0,2,4,6,8]

		}

* Example B

		Request

		{

		"numbers": [2,2,2,2,2]

		}

		Response

		{

		"is_success": true,

		"user_id": "john_doe_17091999",

		"odd": [],

		"even": [2,2,2,2,2]

		}

* Example C

		Request

		{

		"numbers": [1,2,3,4,5,6,"A"]

		}

		Response

		{

		"is_success": false,

		"user_id": "john_doe_17091999"

		}