export class ProadjectState {

    public UsersSettings: UsersSettings;

    public CurrentLocation: Location;

    public CurrentForecast: ForecastInfo;

    public WeeklyForecast?: Array<ForecastInfo>;

    public Loading: boolean;

}

export class UsersSettings {

    public FavoriteLocations: Array<Location>;

    public FavoriteRoutes: Array<Route>;

    public Tier: string;

}

export class Location {

    public Latitude: number;

    public Longitude: number;

    public City: string;

    public State: string;

    public Country: string;

    public County: string;

    public ZipCode: string;

}

export class Route {

    public Name: string;

    public Points: Array<Location>;

    public Distance: number;

}

export class ForecastInfo {
    public Temperature: number;

    public TempHigh: number;

    public TempLow: number;

    public TempUnit: string;

    public FeelsLike: number;

    public Humidity: number;

    public BarometricPressure: number;

    public WeatherCondition: string;

    public WeatherIcon: string;

    public WindSpeed: string;

    public WindDirection: string;

    public WindIcon: string;

    public DewPoint: number;

    public UVIndex: number;

    public PrecipChance: number;

    public PrecipIcon: string;

    public Date: Date;

    public LastUpdated: Date;
}

export class DailyForecast {



}