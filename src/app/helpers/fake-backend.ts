import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { UUID } from 'angular2-uuid';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    let correlativos: any[] = JSON.parse(localStorage.getItem('correlativos')) || [];
    let oficinas: any[] = JSON.parse(localStorage.getItem('oficinas')) || [];
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        const testUser = { username: 'palvarado', password: 'palvarado', firstName: 'Test', lastName: 'User' };
        const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhbHZhcmFkbyIsInBhc3N3b3JkIjoicGFsdmFyYWRvIiwibWVudSI6W3sibWVudV9vcGNpb25faWQiOjEsIm9wY2lvbiI6IkluaWNpbyIsImhyZWYiOiJyYWR0b29scy5ob21lIiwiYWxpYXMiOm51bGwsInRvb2x0aXAiOm51bGwsImljb25vIjoiaW9uIGlvbi1pb3MtaG9tZSIsIm9wY2lvbl9wYWRyZSI6bnVsbCwicG9zaWNpb24iOjEsImVzdGFkbyI6IkFDVElWTyIsInVzdWFyaW9fbWVudV9vcGNpb25faWQiOjEsInVzZXJuYW1lIjoicGFsdmFyYWRvIiwiZmVjaGFfcmVnaXN0cm8iOiIyMDE3LTAxLTAyVDIzOjM3OjIxLjM5MVoifSx7Im1lbnVfb3BjaW9uX2lkIjo0LCJvcGNpb24iOiJDb3JyZXNwb25kZW5jaWEiLCJocmVmIjpudWxsLCJhbGlhcyI6bnVsbCwidG9vbHRpcCI6bnVsbCwiaWNvbm8iOiJmYS1lbnZlbG9wZSIsIm9wY2lvbl9wYWRyZSI6bnVsbCwicG9zaWNpb24iOjEsImVzdGFkbyI6IkFDVElWTyIsInVzdWFyaW9fbWVudV9vcGNpb25faWQiOjQsInVzZXJuYW1lIjoicGFsdmFyYWRvIiwiZmVjaGFfcmVnaXN0cm8iOiIyMDE3LTA5LTE3VDIwOjExOjA4Ljc4M1oiLCJzdWJtZW51IjpbeyJtZW51X29wY2lvbl9pZCI6Nywib3BjaW9uIjoiQ29ycmVsYXRpdm9zIiwiaHJlZiI6Ii9tYWluL2NvcnJlbGF0aXZvcyIsImFsaWFzIjpudWxsLCJ0b29sdGlwIjpudWxsLCJpY29ubyI6ImZhLXBsdXMiLCJvcGNpb25fcGFkcmUiOjQsInBvc2ljaW9uIjoxLCJlc3RhZG8iOiJBQ1RJVk8iLCJ1c3VhcmlvX21lbnVfb3BjaW9uX2lkIjo3LCJ1c2VybmFtZSI6InBhbHZhcmFkbyIsImZlY2hhX3JlZ2lzdHJvIjoiMjAxNy0wOS0xN1QyMDoxMjozNy40MDJaIn1dfSx7Im1lbnVfb3BjaW9uX2lkIjo1LCJvcGNpb24iOiJDb25maWd1cmFjaW9uIiwiaHJlZiI6bnVsbCwiYWxpYXMiOm51bGwsInRvb2x0aXAiOm51bGwsImljb25vIjoiZmEtY29nIiwib3BjaW9uX3BhZHJlIjpudWxsLCJwb3NpY2lvbiI6MSwiZXN0YWRvIjoiQUNUSVZPIiwidXN1YXJpb19tZW51X29wY2lvbl9pZCI6NSwidXNlcm5hbWUiOiJwYWx2YXJhZG8iLCJmZWNoYV9yZWdpc3RybyI6IjIwMTctMDktMTdUMjA6MTI6MDMuMjQ3WiIsInN1Ym1lbnUiOlt7Im1lbnVfb3BjaW9uX2lkIjo2LCJvcGNpb24iOiJPZmljaW5hcyIsImhyZWYiOiIvbWFpbi9vZmljaW5hcy8iLCJhbGlhcyI6bnVsbCwidG9vbHRpcCI6bnVsbCwiaWNvbm8iOiJmYS1idWlsZGluZy1vIiwib3BjaW9uX3BhZHJlIjo1LCJwb3NpY2lvbiI6MiwiZXN0YWRvIjoiQUNUSVZPIiwidXN1YXJpb19tZW51X29wY2lvbl9pZCI6NiwidXNlcm5hbWUiOiJwYWx2YXJhZG8iLCJmZWNoYV9yZWdpc3RybyI6IjIwMTctMDktMTdUMjA6MTI6MTYuNzQ5WiJ9XX0seyJtZW51X29wY2lvbl9pZCI6Miwib3BjaW9uIjoiR2VuZXJhciIsImhyZWYiOiJyYWR0b29scy5idWlsdCIsImFsaWFzIjpudWxsLCJ0b29sdGlwIjpudWxsLCJpY29ubyI6ImlvbiBpb24tc2V0dGluZ3MiLCJvcGNpb25fcGFkcmUiOm51bGwsInBvc2ljaW9uIjoyLCJlc3RhZG8iOiJBQ1RJVk8iLCJ1c3VhcmlvX21lbnVfb3BjaW9uX2lkIjoyLCJ1c2VybmFtZSI6InBhbHZhcmFkbyIsImZlY2hhX3JlZ2lzdHJvIjoiMjAxNy0wMS0wMlQyMzozNzoyMS4zOTFaIiwic3VibWVudSI6W3sibWVudV9vcGNpb25faWQiOjMsIm9wY2lvbiI6IkFyY2hpdm9zIiwiaHJlZiI6InJhZHRvb2xzLmZpbGVzIiwiYWxpYXMiOm51bGwsInRvb2x0aXAiOm51bGwsImljb25vIjoiaW9uIGlvbi1kb2N1bWVudC10ZXh0Iiwib3BjaW9uX3BhZHJlIjoyLCJwb3NpY2lvbiI6MSwiZXN0YWRvIjoiQUNUSVZPIiwidXN1YXJpb19tZW51X29wY2lvbl9pZCI6MywidXNlcm5hbWUiOiJwYWx2YXJhZG8iLCJmZWNoYV9yZWdpc3RybyI6IjIwMTctMDEtMDJUMjM6Mzc6MjEuMzkxWiJ9XX1dLCJpYXQiOjE1MDU2ODE1MzksImV4cCI6MTUwNTc2NzkzOX0.8XYSNmvN-i59JDUxMnJEejJ2h6BW8qHtWmNvKbOMVeg';
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // fake authenticate api end point
            if (connection.request.url.endsWith('/api/login') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                const params = JSON.parse(connection.request.getBody());
                // check user credentials and return fake jwt token if valid
                if (params.username === testUser.username && params.password === testUser.password) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { success: true, token: TOKEN } })
                    ));
                } else {
                    // else return 400 bad request
                    connection.mockError(new Error('Username or password is incorrect'));
                }
            }

            // fake correlativos api end point GET
            if (connection.request.url.startsWith('/api/correlativos') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + TOKEN) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: {
                                  success: true,
                                  rows: correlativos,
                                  total: correlativos.length
                                }
                        })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

            // fake correlativos api end point POST
            if (connection.request.url.startsWith('/api/correlativos') && connection.request.method === RequestMethod.Post) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + TOKEN) {
                    // get new correlativo object from post body
                    let newCorrelativo = JSON.parse(connection.request.getBody());

                    // save new user
                    newCorrelativo.correlativo = correlativos.length + 1;
                    correlativos.push(newCorrelativo);
                    localStorage.setItem('correlativos', JSON.stringify(correlativos));
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: {
                                  success: true,
                                  msg: 'Proceso ejecutado con exito',
                                  id: newCorrelativo.id
                                }
                        })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

          // fake oficinas api end point GET
            if (connection.request.url.startsWith('/api/oficinas') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + TOKEN) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: {
                                  success: true,
                                  rows: oficinas,
                                  total: oficinas.length
                                }
                        })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

            // fake oficinas api end point POST
            if (connection.request.url.startsWith('/api/oficinas') && connection.request.method === RequestMethod.Post) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + TOKEN) {
                    // get new correlativo object from post body
                    let newOficina = JSON.parse(connection.request.getBody());

                    // save new user
                    newOficina.id = oficinas.length + 1;
                    oficinas.push(newOficina);
                    localStorage.setItem('oficinas', JSON.stringify(oficinas));
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: {
                                  success: true,
                                  msg: 'Proceso ejecutado con exito',
                                  id: newOficina.id
                                }
                        })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

            // fake oficinas api end point DELETE
            if (connection.request.url.match(/\/api\/oficinas\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                if (connection.request.headers.get('Authorization') === 'Bearer ' + TOKEN) {
                    // find user by id in users array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < oficinas.length; i++) {
                        if (oficinas[i].id === id) {
                            // delete user
                            oficinas.splice(i, 1);
                            localStorage.setItem('oficinas', JSON.stringify(oficinas));
                            break;
                        }
                    }
                    // respond 200 OK
                  connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: {
                                  success: true,
                                  msg: 'Proceso ejecutado con exito',
                                  id: id
                                }
                        })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
