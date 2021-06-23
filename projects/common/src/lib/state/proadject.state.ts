export class ProadjectState {

    public UsersSettings: UsersSettings;

    public CurrentLocation: Location;

}

export class UsersSettings {

    public FavoriteLocations: Array<Location>;

    public FavoriteRoutes: Array<Route>;

    public Tier: string;

}

export class Location {

    public Latitude: number;

    public Longitude: number;

}

export class Route {

    public Name: string;

    public Points: Array<Location>;

    public Distance: number;

}