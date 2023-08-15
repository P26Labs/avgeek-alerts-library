export interface EmailFlightArrivalDelay {
    full_name: string
    iata_code: string
    flight_number: number
    from_airport_iata_code: string
    to_airport_iata_code: string
    from_airport_city: string
    to_airport_city: string
    flight_duration: string
    departure_date_time: string
    arrival_date_time: string
    departure_delay: string
    arrival_delay: string
    next_status_check: string
}

export interface EmailFlightAdd {
    flight_id: string
    passenger_full_name: string
    airline_name: string
    from_airport_name: string
    to_airport_name: string
    actual_departure_date: string
    actual_arrival_date: string
    passenger_seat: string
    passenger_cabin: string
    passenger_pnr: string
    airline_check_in_url: string
    passenger_aztec_code: string
    fa_departure_gate: string
    fa_arrival_gate: string
    fa_departure_terminal: string
    fa_arrival_terminal: string
    full_name: string
    iata_code: string
    flight_number: number
    from_airport_iata_code: string
    to_airport_iata_code: string
    from_airport_city: string
    to_airport_city: string
    flight_duration: string
    departure_date_time: string
    arrival_date_time: string
}

export interface EmailFlightCancel {
    full_name: string
    iata_code: string
    flight_number: number
}

export interface EmailFlightCheckIn {
    full_name: string
    iata_code: string
    flight_number: number
    airline_name: string
    check_in_link: string
    from_airport_iata_code: string
    to_airport_iata_code: string
    from_airport_city: string
    to_airport_city: string
    flight_duration: string
    departure_date_time: string
    arrival_date_time: string
}

export interface EmailFlightAutoCheckInRequest {
    full_name: string;
    iata_code: string;
    flight_number: number;
    airline_name: string;
    from_airport_iata_code: string;
    to_airport_iata_code: string;
    from_airport_city: string;
    to_airport_city: string;
    departure_date_time: string;
    seat_preference: string;
    cabin_preference: string;
    meal_preference: string;
}

export interface EmailFlightAutoCheckInInitiate extends EmailFlightAutoCheckInRequest {
    email_address: string;
}

export interface EmailFlightLand {
    full_name: string
    iata_code: string
    flight_number: number
    from_airport_iata_code: string
    to_airport_iata_code: string
    from_airport_city: string
    to_airport_city: string
    flight_duration: string
    departure_date_time: string
    arrival_date_time: string
    departure_delay: string
    arrival_delay: string
}

export interface EmailFlightRemove {
    full_name: string
    iata_code: string
    flight_number: number
}

export interface EmailFlightStatus {
    full_name: string
    iata_code: string
    flight_number: number
    flight_status: string
    gate_information_formatted: string
    from_airport_iata_code: string
    to_airport_iata_code: string
    from_airport_city: string
    to_airport_city: string
    flight_duration: string
    departure_date_time: string
    arrival_date_time: string
}