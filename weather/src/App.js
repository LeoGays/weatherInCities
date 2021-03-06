import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "478e59de404fbe17acf9d808676fe5c9";




class App extends React.Component{

    state  = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    validate = (data) => {
        return data.cod != "404";
    }



    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if (city) {

            const api_url = await  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
            const data = await api_url.json();

            if(this.validate(data)) {

                var sunset = data.sys.sunset;
                var date = new Date();
                date.setTime(sunset);
                var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunset_date,
                    error: undefined
                })

            } else {
                this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    pressure: undefined,
                    sunset: undefined,
                    error: "Такого города нет"
                })
            }



        } else  {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города "
            })
        }


    }


    render() {
        return (
            <div className="container-fluid">
                        <div className="col-sm-12 form">
                            <Form weatherMethod = {this.gettingWeather}/>
                            <Weather
                                temp = {this.state.temp}
                                city = {this.state.city}
                                country = {this.state.country}
                                pressure = {this.state.pressure}
                                sunset = {this.state.sunset}
                                error = {this.state.error}

                            /></div>
            </div>
        );
    }
}

export default App;