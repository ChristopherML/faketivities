using System;
using System.Net;

namespace Application.Errors
{
    public class RestException : Exception
    {
        public RestException(HttpStatusCode code, object errors = null)
        {
            Code = code;
            Errors = errors;
        }

        public HttpStatusCode Code { get; }
        public object Errors { get; }
    }
}


// CHECK MODULE 12 POSTMAN LOGIN BAD USER PASSWORD >> 
// WAS THROWING "RESTEXCEPTION" 500 ERROR SHOULD BE RESOLVED WHEN THIS IS COMPLETED!