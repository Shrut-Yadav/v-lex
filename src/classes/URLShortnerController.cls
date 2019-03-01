public with sharing class URLShortnerController {
    private static String login = 'kkteja';
    private static String api_key = 'R_d757691e564e549f881ddd6528ea5b65';
    
	@AuraEnabled
    public static String URLShortenMethod(String long_url){
        
        String apiURL = 'https://api-ssl.bitly.com/v3/shorten?apiKey='+api_key+'&login='+login+'&longUrl='+long_url;
        String result = getCalloutResponseContents(apiURL);
		System.debug('result::' + result);

		return (result == null)?null:getCalloutResponseContents(apiURL);
        
    }

  private static String getCalloutResponseContents(String url) {
	String result = null;
    Http h = new Http();
	HttpRequest req = new HttpRequest();
    req.setEndpoint(url);
    req.setMethod('GET');

    HttpResponse res = h.send(req);
	if(res.getStatusCode() == 200){
    	result = res.getBody();
    }
    return result;
  }
}