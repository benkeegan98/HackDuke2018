    var express = require('express');
    var app = express();

    // Our first route
    app.get('/', function (req, res) {
        res.send('Hello Dev!');
    });

    class Clinic {
    	public name; // string
    	public formatted_address; // string
    	public geometry; // any
    	public url; // string
    	public specialties; // string[]

    	function getTravelTimeFrom(user_address){

    	}

    }
    //FIXME: Address must be derived from survey input
	var addy = "1712 Pace Street, Durham, NC"
	var convertAddyToLatLng = function(addy){
 		map = new google.maps.Geocoder(document.getElementById('map'), {
 		address : addy
 		})
 		var result = Geocoder.geocode(map)
 		LatLngObject = result['geometry'][0]['location']['value']
 		console.log(LatLngObject) //FIXME: Remove this once this function has been tested
 		return LatLngObject
	}

	function initSearch() { //
		// Create the map.
		var LatLngObject = convertAddyToLatLng(Addy) //my code, sets origin at home address
		//var pyrmont = {lat: -33.866, lng: 151.196}; //their code
		map = new google.maps.Map(document.getElementById('map'), {
		center: LatLngObject,
		zoom: 17
	});

		var request = {
 			location: LatLngObject,
 			radius: '500',
 			query: 'mental health clinic',
	};

		service = new google.maps.places.PlacesService(map);
		var ret = service.textSearch(request, callback); //some sort of for loop calling callback() for every queried item?

		console.log(ret) //FIXME: Remove this once this function has been tested

		return ret;


	//Checks that the PlacesServiceStatus is OK, and adds a marker
	//using the name, formatted address, and geometry from the PlacesService.
	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
		console.log(results)
		var specialties = specialtiesHardCode(results[0]) //not survey
		var marker = new google.maps.Marker({
		map: map,
		place: {
			fields: ['name', 'formatted_address', 'geometry', 'url'] //FIXME: should return specializations instead of geometry
		}
		});
	}
	function constructRequestURL(api_key, origin, destination){
  #we want to scrape the googlemaps website
  var site = 'https://maps.googleapis.com/maps/api/'

  #we want to use the distancematrix service
  var service = 'distancematrix/json?'

  #input origin and destination from the user
  var locations = 'origins=%s&destinations=%s&departure_time=now&' % (origin, destination)

  #input api key from user
  var key = 'key=%s' % (api_key)

  #construct request url
  var request_url = site + service + locations + key

}

//EXAMPLE REQUEST URL: https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY


from SearchQueryResults import convertAddyToLatLng;

var api_key = 'AIzaSyBEKnHsicWxB4MVxVgxUI6mgTsSU5xsd_w';
var PatientAddy = "1712 Pace Street, Durham, NC" //FIXME: Must get this input from survey
// PLACEHOLDER: var PlaceAddy = "4916 Evelyn Byrd Rd, Richmond, VA" //FIXME: Must get this input from GMaps results scrape

function calculate(<Clinic> currentClinic){ //is this the syntax for a clinic object?
  var PlaceAddy = currentClinic.get(address) //not sure if this is the variable name for address?
  constructRequestURL(api_key, PatientAddy, PlaceAddy)

  var LatLngStartPoint = convertAddyToLatLng(PatientAddy);
  var LatLngEndPoint = convertAddyToLatLng(PlaceAddy);

  var service = new google.maps.DistanceMatrixService();
  var ret = service.getDistanceMatrix(
    {
      origins: [LatLngStartPoint, LatLngEndPoint],
    }, callback);

  return ret;
}

function callback(response, status) {
 if (status == 'OK') {
   var origin = response.LatLngStartPoint;
   var destination = response.LatLngEndPoint;

   var result = response.rows[0].elements; //not sure if this will call the distanceMatrix result
      var distance = 0;
      var duration = 0;
      for (var j = 0; j < result.length; j++) {
   
var element = result[j];
       var distance = element.distance.text;
       var duration = element.duration.text;
   }
      return [distance, duration]
 }
}
	function specialtiesHardCode(PlaceAddress){ //input address --> output address of the thing
	var specialties = "";
	if (PlaceAddress == "309 Crutchfield St, Durham, NC 27704"){
	specialties = "Addiction Treatment, Pediatric, Adults, Behavioral Disorders, Residential Services, Crisis Services, Psychiatry, Psychology";
	}
	if (PlaceAddress == "Civitan Bldg, 2213 Elba St, Durham, NC 27705"){
	specialties = "Psychology, Psychiatry, Adults, Behavioral Disorders"
	}
	if (PlaceAddress == "411 Trent Dr, Durham, NC 27710"){
	specialties = "Pediatric, Adult, Psychiatry, Psychology, Addiction Treatment, Behavioral Disorders"
	}
	if (PlaceAddress == "2608 Erwin Rd #300, Durham, NC 27705"){
	specialties = "Pediatric, Behavioral Disorders, Mental Health Assessment, Psychology"
	}
	if (PlaceAddress == "2200 W Main St #340, Durham, NC 27705"){
	specialties = "Psychology, Psychiatry, Adults, Behavioral Disorders"
	}	
	if (PlaceAddress == "200 Trent Dr, Durham, NC 27710"){
	specialties = "Residential Services, Adults, Psychiatry, Crisis Services, Psychology, Group Therapy, Mental Health Assessment"
	}
	if (PlaceAddress == "2020 Chapel Hill Rd #23, Durham, NC 27707"){
	specialties = "Walk-In, Mental Health Assessment, Addiction Treatment, Group Therapy, Psychiatry, Psychology"
	}
	if (PlaceAddress == "40 Duke Medicine Circle, 4th and 5th Floors, Durham, NC 27710"){
	specialties = "Adults, Mental Health Assessment, Psychiatry, Psychology"
	}
	if (PlaceAddress == "1121 W Chapel Hill St #100, Durham, NC 27701"){
	specialties = "Pediatric, Behavioral Disorders, Psychology"
	}
	if (PlaceAddress == "3533, 1312 Broad St, Durham, NC 27705"){
	specialties = "Eating Disorders, Group Therapy, Loss, Addiction Treatment, Psychology, Psychiatry"
	}
	if (PlaceAddress == "249 NC-54 #320, Durham, NC 27713"){
	specialties = "Adult, Pediatric, Mental Health Assessment, Psychiatry, Psychology, Addiction Treatment, Crisis Services, Residential services"
	}
	if (PlaceAddress == "705 S Mangum St #1C, Durham, NC 27701"){
	specialties = "Additction treatment, Psychiatry, residential services, eating disorder, Psychology"

	if (PlaceAddress == "508 Fulton St #3, Durham, NC 27705"){
	specialties = "Addiction Treatment, Adults, Psychiatry"
	}
	if (PlaceAddress == "5842 Fayetteville Rd #106, Durham, NC 27713"){
	specialties = "Psychology, Psychiatry, Pediatric, mental health assessment, loss, couples, group therapy"
	}
	if (PlaceAddress == "D, 3326 Durham-Chapel Hill Blvd, Durham, NC 27707"){
	specialties = "behavioral disorders, psychology, mental health assessment, loss, group therapy"
	}
	if (PlaceAddress == "3643 N Roxboro St, Durham, NC 27704"){
	specialties = "Adult, pediatric, outpatient, addiction treatment, residential services, psychology, psychiatry, group therapy"
	}
	if (PlaceAddress == "3308 Durham-Chapel Hill Blvd #130, Durham, NC 27707"){
	specialties = "Addiction Treatment, Adults, Outpatient, psychology, psychiatry"
	}
	if (PlaceAddress == "4125 Ben Franklin Blvd #160, Durham, NC 27704"){
	specialties = "Couples, Group Therapy, Pediatric, Adult, Mental Health Assessment, Psychiatry, Psychology, Eating Disorders, Loss, Behavioral Disorders"
	}
	if (PlaceAddress == "2003 NC-54 C, Durham, NC 27713"){
	specialties = "Group Therapy, crisis services, psychology, mental health assessment, outpatient, residential services"
	}
	return specialties;
	}
	}
	}

    class UserSurveyContext {
    	public is_child; // bool
    	public has_assessment; //bool
    	public practicioner_type; // enum['psychiatric', 'psychologist']
    	public facility_type; // enum['']
    	public specialities; // enum['']
    	public type_of_services; // enum
    	public address; // string
    	public travel_time; // int
    }

    function getClinics(address){

    	// Return <Clinic[]>
    }

    function containsAll(userSurveyContext, clinics){
    	return _.difference(userSurveyContext, clinics).length == 0;
    }


    function filterClinics(clinics, ){
    	// Filter based on preferences
    	var ClinicAddy;
    	for(int k=0; k < 5; k++){
    		clinicAddys = getTravelTimeFrom(_.find(clinics, functions(containsAll)));
    	}

    }

    app.post('/results', function(req, res){
    	console.log(req);
    	// req.body -> UserSurveyContext
    	
    	var is_child = require('express')();
		var bodyParser = require('body-parser');
		var multer = require('multer'); // v1.0.5
		var upload = multer(); // for parsing multipart/form-data

		if is_child == "Yes_help";
			console.log("Call 911");

		app.use(bodyParser.json()); // for parsing application/json
		app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

		app.post('/profile', upload.array(), function (req, res, next) {
  		console.log(req.body);
  		res.json(req.body);
		});

    	// getClinics(UserSurveyContext.address) -> Clincs[]
    	getClinics(UserSurveyContext)

    	// filterClinics(clinics) -> Clinics[]

    	// res.body()
    	// res.redirect()


    });

    // Listen to port 5000
    app.listen(5000, function () {
        console.log('Dev app listening on port 5000!');
    });