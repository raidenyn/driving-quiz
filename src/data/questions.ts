import {Question} from '../store/questions/state'
import {Observable} from 'rxjs'

const getQuestions = (): Observable<Question[]> => {
    return new Observable<Question[]>(subscriber => {
        subscriber.next(questions)
        subscriber.complete()
    })
}

export default getQuestions

const questions: Question[] = [
    {
        'id': 1,
        'text': 'While driving, what documents must the driver have as well as the driver\'s license?',
        'answers': {
            'A': {
                'text': 'Copy of car registration',
            },
            'B': {
                'text': 'l.D. Card',
            },
            'C': {
                'text': 'House registration',
            },
            'D': {
                'text': 'Social Security Card',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 2,
        'text': 'Drivers who have received their summons for land traffic offences must pay the fine within how many days?',
        'answers': {
            'A': {
                'text': '7 days',
            },
            'B': {
                'text': '10 days',
            },
            'C': {
                'text': '15 days',
            },
            'D': {
                'text': '30 days',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 3,
        'text': 'When a driver\'s license is lost or damage how many day should an applicant request for a replacement license take?',
        'answers': {
            'A': {
                'text': '15 days',
            },
            'B': {
                'text': '20 days',
            },
            'C': {
                'text': '30 days',
            },
            'D': {
                'text': '45 days',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 4,
        'text': 'What is a penalty for driving without a license?',
        'answers': {
            'A': {
                'text': 'Imprisonment up to lyear',
            },
            'B': {
                'text': 'Imprisonment up to 1 month or fine not exceed 1,000 baht or both',
            },
            'C': {
                'text': 'A fine exceeding 2,000 baht',
            },
            'D': {
                'text': 'A fine exceeding 5,000 baht',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 5,
        'text': 'How many years does a temporary driving license last?',
        'answers': {
            'A': {
                'text': '1 year',
            },
            'B': {
                'text': '2 years',
            },
            'C': {
                'text': '3 years',
            },
            'D': {
                'text': '5 years',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 6,
        'text': 'What is a penalty for driving with an expired license?',
        'answers': {
            'A': {
                'text': 'A fine not exceeding 2,000 baht.',
            },
            'B': {
                'text': 'A fine exceeding 2,000 baht.',
            },
            'C': {
                'text': 'Imprisonment up to 3 months',
            },
            'D': {
                'text': 'Imprisonment not more than 1 month',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 7,
        'text': 'How much is the fine nonpayment of the car tax within the defined time?',
        'answers': {
            'A': {
                'text': '1 % per month',
            },
            'B': {
                'text': '1% per year',
            },
            'C': {
                'text': '10 % per month',
            },
            'D': {
                'text': '20% per year',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 8,
        'text': 'Within how many days should the vehicle transfer be reported to the registrar?',
        'answers': {
            'A': {
                'text': '15 days',
            },
            'B': {
                'text': '20 days',
            },
            'C': {
                'text': '30 days',
            },
            'D': {
                'text': '45 days',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 9,
        'text': 'Which how many days does a car owner have to report a change in car color?',
        'answers': {
            'A': {
                'text': '7 days',
            },
            'B': {
                'text': '10 days',
            },
            'C': {
                'text': '15 days',
            },
            'D': {
                'text': '20 days',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 10,
        'text': 'How long in advance can renew the renewal of personal driving license (5 years) be made?',
        'answers': {
            'A': {
                'text': '3 months',
            },
            'B': {
                'text': '4 months',
            },
            'C': {
                'text': '5 months',
            },
            'D': {
                'text': '6 months',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 11,
        'text': 'How old does a car have to be before it has to be checked prior to the annual tax payment?',
        'answers': {
            'A': {
                'text': '6 years',
            },
            'B': {
                'text': '3 years',
            },
            'C': {
                'text': '5 years',
            },
            'D': {
                'text': '7 years',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 12,
        'text': 'Within how many days must a car owner notify the registrar about the moving of his/her car?',
        'answers': {
            'A': {
                'text': '25 days',
            },
            'B': {
                'text': '20 days',
            },
            'C': {
                'text': '15 days',
            },
            'D': {
                'text': '30 days',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 13,
        'text': 'How old does a motorcycle have to be before it has to be checked prior to the annual tax payment?',
        'answers': {
            'A': {
                'text': '1 year',
            },
            'B': {
                'text': '5 years',
            },
            'C': {
                'text': '2 years',
            },
            'D': {
                'text': '3 years',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 14,
        'text': 'What condition does a vehicle need to be in before registration?',
        'answers': {
            'A': {
                'text': 'The carthat inspected by a private car inspector.',
            },
            'B': {
                'text': 'The car must have the correct fittings.',
            },
            'C': {
                'text': 'Vehicles purchased from the general car dealer.',
            },
            'D': {
                'text': 'The car must have complete fittings and have passed the car inspection.',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 15,
        'text': 'Which one is wrong?',
        'answers': {
            'A': {
                'text': 'Personal motorcycles are not permitted for the hire for passengers',
            },
            'B': {
                'text': 'Private Car can be used for hire.',
            },
            'C': {
                'text': 'Public motorcycle are permitted for use of the hire of passengers.',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 16,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'Personal motorcycles are not permitted for the hire for passengers.',
            },
            'B': {
                'text': 'A public driver\'s license can be used instead of a personal driver\'s license.',
            },
            'C': {
                'text': 'A public driver\'s license can be used instead of a personal tricycle license.',
            },
            'D': {
                'text': 'A public tricycle license can be used instead of a personal motorcycle license.',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 17,
        'text': 'Mr. A was born in Chiang Mai, where should he apply for a temporary driver\'s license?',
        'answers': {
            'A': {
                'text': 'Transportation offices throughout the country.',
            },
            'B': {
                'text': 'Chiang Mai Transport Office except Bangkok',
            },
            'C': {
                'text': 'Chiang Mai Transport Office except Yala Provincial Transport Office, Betong Branch',
            },
            'D': {
                'text': 'None is correct',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 18,
        'text': 'What is the minimum age required for applying for temporary driver\'s license?',
        'answers': {
            'A': {
                'text': 'Not less than 15 years',
            },
            'B': {
                'text': 'Not less than 18 years of age',
            },
            'C': {
                'text': 'Not less than 16 years',
            },
            'D': {
                'text': 'Not less than 16 years',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 19,
        'text': 'Mr. Chai does not have fingers on his left hand, can he get a temporary driving license?',
        'answers': {
            'A': {
                'text': 'Yes, because he is not a physically disabled person who cannot drive.',
            },
            'B': {
                'text': 'Yes, if Mr. Chai has a disabled card.',
            },
            'C': {
                'text': 'No because of the land transport regulations.',
            },
            'D': {
                'text': 'No, because the man is physically disabled.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 20,
        'text': 'Who in the following can obtain a personal driving license?',
        'answers': {
            'A': {
                'text': 'Mrs. Ying is a person of insanity or mental disorder.',
            },
            'B': {
                'text': 'Mr. Chai is not physically disabled to the point that he cannot drive.',
            },
            'C': {
                'text': 'Mr. Black is under license confiscated.',
            },
            'D': {
                'text': 'Mrs. Red is under a suspended license.',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 21,
        'text': 'What is required for anyone to apply for a public driving license?',
        'answers': {
            'A': {
                'text': 'They must know the roads and highways in the province where they apply for a driver\'s license',
            },
            'B': {
                'text': '20 years of age',
            },
            'C': {
                'text': 'Experience in driving for at least 5 years',
            },
            'D': {
                'text': 'Must have motorcycle driving license and a driving license.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 22,
        'text': 'When a driver\'s license is suspended or revoked, within how many days can the owner make an appeal?',
        'answers': {
            'A': {
                'text': '15 days',
            },
            'B': {
                'text': '30 days',
            },
            'C': {
                'text': '60 days',
            },
            'D': {
                'text': '90 days',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 23,
        'text': 'If a driver\'s license is revoked, s/he must surrender it within how many days?',
        'answers': {
            'A': {
                'text': '30 days',
            },
            'B': {
                'text': '15 days',
            },
            'C': {
                'text': '90 days',
            },
            'D': {
                'text': '60 days',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 24,
        'text': 'Within a period of how many days must a driver report personally to the registrar if s/he has been summoned for committing an automobile offence?',
        'answers': {
            'A': {
                'text': '3 days',
            },
            'B': {
                'text': '7 days',
            },
            'C': {
                'text': '10 days',
            },
            'D': {
                'text': '15 days',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 25,
        'text': 'What type of insurance is used for annual tax renewal?',
        'answers': {
            'A': {
                'text': 'Mandatory insurance required by the Protection of Victims from Car Accidents Act.',
            },
            'B': {
                'text': 'Type 1 insurance',
            },
            'C': {
                'text': 'Type 2 insurance',
            },
            'D': {
                'text': 'Type 3 insurance',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 26,
        'text': 'What safety measures must be taken when driving through intersections?',
        'answers': {
            'A': {
                'text': 'Let the car in the intersection go first.',
            },
            'B': {
                'text': 'When Warning Signs are shown at the intersection, drive at normal speed.',
            },
            'C': {
                'text': 'If there are no traffic light signals, let the larger vehicles pass through the intersection first',
            },
            'D': {
                'text': 'When seeing the light warning signals at the intersection, drive as usual',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 27,
        'text': 'What must be done when stopping at an intersection?',
        'answers': {
            'A': {
                'text': 'Stop beyond the stop signs',
            },
            'B': {
                'text': 'Stop behind the stop lines',
            },
            'C': {
                'text': 'Stop over the stop lines',
            },
            'D': {
                'text': 'Stop beyond the stop sign',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 28,
        'text': 'How far must a car be parked from the edge of the road?',
        'answers': {
            'A': {
                'text': 'Up to 25 centimeters',
            },
            'B': {
                'text': 'Up to 30 centimeters',
            },
            'C': {
                'text': 'Up to 35 centimeters',
            },
            'D': {
                'text': 'Up to 40 centimeters',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 29,
        'text': 'Overtaking must be done on the right hand side apart from which of the following situations, when it can done on the left?',
        'answers': {
            'A': {
                'text': 'When overtaking another car on the left while driving on a bridge.',
            },
            'B': {
                'text': 'When overtaking the other car on the left when in a built up town area.',
            },
            'C': {
                'text': 'When the car being overtaken is turning right or giving the turn right signals.',
            },
            'D': {
                'text': 'When overtaking another car on the left in a one-way lane.',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 30,
        'text': 'What does \'safety zone\' mean?',
        'answers': {
            'A': {
                'text': 'The area marked with a sign indicating to the driver that it is safe to drive.',
            },
            'B': {
                'text': 'The marked areas in the lanes that are clearly visible at all times for pedestrians waiting at a crossing or for people who are getting on or off a stopped vehicle to wait before crossing.',
            },
            'C': {
                'text': 'The area where pedestrians can cross the road without waiting.',
            },
            'D': {
                'text': 'The area where the drivers can drive the car.',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 31,
        'text': 'A driver must drive in the left lane EXCEPT under which of the following situations when s/he can drive in the right or overlapping lane?',
        'answers': {
            'A': {
                'text': 'The left side of the road has obstructions.',
            },
            'B': {
                'text': 'No oncoming traffic',
            },
            'C': {
                'text': 'The lane is very wide.',
            },
            'D': {
                'text': 'The lanes are flooded.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 32,
        'text': 'How far must a car maintain its distance from the vehicle in front?',
        'answers': {
            'A': {
                'text': 'At a distance that can stop the car safely when the car ahead stops.',
            },
            'B': {
                'text': 'Not less than 1 meter',
            },
            'C': {
                'text': 'Not less than 2 meters',
            },
            'D': {
                'text': 'Not less than 3 meters',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 33,
        'text': 'What must be done when driving in two-way traffic?',
        'answers': {
            'A': {
                'text': 'Slow down and drive on the left.',
            },
            'B': {
                'text': 'If there are obstacles ahead, there is no need to stop or wait for the oncoming traffic',
            },
            'C': {
                'text': 'If the way ahead is too narrow for traffic to flow in both directions then the driver in smaller car must and pull over to the left to let the bigger car go first.',
            },
            'D': {
                'text': 'You can overtake by using the bus lane.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 34,
        'text': 'From what distance is overtaking forbidden when there is fog, dust, rain or smoke affecting visibility?',
        'answers': {
            'A': {
                'text': '60 meters',
            },
            'B': {
                'text': '70 meters',
            },
            'C': {
                'text': '80 meters',
            },
            'D': {
                'text': '90 meters',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 35,
        'text': 'In which of the following areas is it safe to make a U-turn?',
        'answers': {
            'A': {
                'text': 'In a bridge area',
            },
            'B': {
                'text': 'Mоге than 100 meters from the foot of the bridge.',
            },
            'C': {
                'text': 'In lanes where there is a \'No U-turn\' sign',
            },
            'D': {
                'text': 'In a safety zone',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 36,
        'text': 'When a driver sees the "Turn Left Through" sign, what should s/he do?',
        'answers': {
            'A': {
                'text': 'Stop and wait for people to cross the street and allow the car from the right hand to pass and then turn left.',
            },
            'B': {
                'text': 'Stop until you get the green light signal to turn left.',
            },
            'C': {
                'text': 'Slow down the car and turn left immediately.',
            },
            'D': {
                'text': 'Turning left is allowed.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 37,
        'text': 'Which of the following is wrong?',
        'answers': {
            'A': {
                'text': 'Parking at a crossroads',
            },
            'C': {
                'text': 'Slow down when critical',
            },
            'B': {
                'text': 'Slow down when people are crossing the road',
            },
            'D': {
                'text': 'Slow down at the roundabout',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 38,
        'text': 'In which areas can overtaking be done?',
        'answers': {
            'A': {
                'text': 'At an intersection',
            },
            'C': {
                'text': 'On a one way bridge',
            },
            'B': {
                'text': 'On the road with traffic signs to overtake.',
            },
            'D': {
                'text': 'On a narrow curve',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 39,
        'text': 'What must be done before changing lanes or overtaking a car at all times?',
        'answers': {
            'A': {
                'text': 'Hurry to change lanes quickly.',
            },
            'B': {
                'text': 'Overtake and hit the brake pedal.',
            },
            'C': {
                'text': 'Signals must be provided to other',
            },
            'D': {
                'text': 'Speed up to overtake.',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 40,
        'text': 'In which areas can parking be made?',
        'answers': {
            'A': {
                'text': 'Where there is Don\'t Stop sign',
            },
            'B': {
                'text': 'In a tunnel',
            },
            'C': {
                'text': 'At a crossroads',
            },
            'D': {
                'text': 'Parking area',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 41,
        'text': 'Which one is correct for driving?',
        'answers': {
            'A': {
                'text': 'Driving at a speed not exceeding the limit by law',
            },
            'B': {
                'text': 'Drive in a way that obstruct the traffic',
            },
            'C': {
                'text': 'Drive over the lane diving lines',
            },
            'D': {
                'text': 'Over take in the runnel',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 42,
        'text': 'What must be done when the driver reaches the railway and the train is passing?',
        'answers': {
            'A': {
                'text': 'Stop the car at least 5 meters away from the railway',
            },
            'B': {
                'text': 'Give horn warning signals and drive through',
            },
            'C': {
                'text': 'Stop and wait for the light signals and turn on emergency lights',
            },
            'D': {
                'text': 'Drive quickly',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 43,
        'text': 'When a driver flees the scene of an accident, what will be the result?',
        'answers': {
            'A': {
                'text': 'It is assumed that the person is the culprit.',
            },
            'B': {
                'text': 'No results because he is not at fault',
            },
            'C': {
                'text': 'They will be asked to be a witness',
            },
            'D': {
                'text': 'You will be the right party',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 44,
        'text': 'What is the legal alcohol limit for drivers?',
        'answers': {
            'A': {
                'text': 'Not more than 60 mg. percent',
            },
            'C': {
                'text': 'Not more than 70 mg. percent',
            },
            'B': {
                'text': 'Not more than 50 mg. percent',
            },
            'D': {
                'text': 'Not more than 80 mg. percent',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 45,
        'text': 'What is the penalty for driving under the influence of alcohol beyond the legal limit?',
        'answers': {
            'A': {
                'text': 'Fine up to 5,000 Baht',
            },
            'B': {
                'text': 'A fine not exceeding 10,000 baht',
            },
            'C': {
                'text': 'Imprisonment of up to 1 year or a fine of between 5,000 to 20,000 Baht, or both.',
            },
            'D': {
                'text': 'Imprisonment of up to 3 months or a fine of between 1,000 and 50,000 Baht',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 46,
        'text': 'What is the speed limit WITHIN Bangkok, Pattaya City and other metropolitan districts?',
        'answers': {
            'A': {
                'text': 'Up to 80km/h',
            },
            'B': {
                'text': 'Up to 60 km',
            },
            'C': {
                'text': 'Up to 90 km/h',
            },
            'D': {
                'text': 'Up to 100 km/h',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 47,
        'text': 'What is the speed limit OUTSIDE Bangkok, Pattaya City and other metropolitan districts?',
        'answers': {
            'A': {
                'text': 'Up to 80 km/h',
            },
            'B': {
                'text': 'Up to 100 km/h',
            },
            'C': {
                'text': 'Up to 90 km/h',
            },
            'D': {
                'text': 'Up to 120 km/h',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 48,
        'text': 'At an intersection where there is a "Do not make a U-turn" sign but a traffic official allows the driver to make a U-turn, what must be done?',
        'answers': {
            'A': {
                'text': 'U-turn according to the order of the traffic officer.',
            },
            'B': {
                'text': 'Make a U-turn if there is no U-turn sign',
            },
            'C': {
                'text': 'U-turn if there is no intersection',
            },
            'D': {
                'text': 'Cannot make a U-turn',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 49,
        'text': 'What must be done when the driver wants to make a U-turn?',
        'answers': {
            'A': {
                'text': 'U-turn at the critical area',
            },
            'B': {
                'text': 'Enter the right lane and U-turn when safe.',
            },
            'C': {
                'text': 'U-turn at a diagonal yellow lines.',
            },
            'D': {
                'text': 'Drive in any lane',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 50,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'Truck must be driven in the right-hand lane.',
            },
            'B': {
                'text': 'Passenger truck must drive in the right-hand lane.',
            },
            'C': {
                'text': 'Motorcycle must be in the left lane.',
            },
            'D': {
                'text': 'Changing the lanes to the right or left does not require looking at the left or right mirrors.',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 51,
        'text': 'When driving along a road with two or three lanes going in the same direction, what must a driver do when s/he sees motorcycle riders?',
        'answers': {
            'A': {
                'text': 'Must drive on the left side.',
            },
            'B': {
                'text': 'Must drive on the right side.',
            },
            'C': {
                'text': 'Must drive over the dividing lane line',
            },
            'D': {
                'text': 'Must be in the lane to drive straight.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 52,
        'text': 'Who is exempt from wearing a motorcycle helmet?',
        'answers': {
            'A': {
                'text': 'Novice, monk',
            },
            'B': {
                'text': 'Passengers',
            },
            'C': {
                'text': 'The driver',
            },
            'D': {
                'text': 'Children',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 53,
        'text': 'Which of the following emergency lighting is correct?',
        'answers': {
            'A': {
                'text': 'Always on',
            },
            'B': {
                'text': 'CAг broken accident',
            },
            'C': {
                'text': 'When passing an intersection',
            },
            'D': {
                'text': 'Foggy',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 54,
        'text': 'What must be done when transporting materials?',
        'answers': {
            'A': {
                'text': 'Transport materials over the backof the vehicle not more than 2.50 meters.',
            },
            'B': {
                'text': 'Transport materials over the front of the vehicle not more than 2.50 meters.',
            },
            'C': {
                'text': 'The load can be 1 meter wider that the width of the vehicle each side',
            },
            'D': {
                'text': 'High load with the height over 5 meters',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 55,
        'text': 'What must be done for vehicles using low speed?',
        'answers': {
            'A': {
                'text': 'Drive to the right edge.',
            },
            'B': {
                'text': 'Can drive on both left and right.',
            },
            'C': {
                'text': 'Drive along the left edge.',
            },
            'D': {
                'text': 'Drive at the shoulder',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 56,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Drive slowly if it is not safe for other vehicles or pedestrian in the lane ahead. Have to stop before give way lines.',
            },
            'B': {
                'text': 'Increase caution at the pick-up areas',
            },
            'D': {
                'text': 'Increase caution then park the car',
            },
            'C': {
                'text': 'Increase caution and stop the car',
            },
        },
        'picture': '56.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 57,
        'text': 'What does this road marking (White Line) mean?',
        'answers': {
            'A': {
                'text': 'Slow down lines',
            },
            'B': {
                'text': 'Can turn',
            },
            'C': {
                'text': 'Don\'t turn',
            },
            'D': {
                'text': 'Park is allowed.',
            },
        },
        'picture': '57.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 58,
        'text': 'What does this road mark mean?',
        'answers': {
            'A': {
                'text': 'Driving one way left.',
            },
            'B': {
                'text': 'Don\'t go straight or turn right',
            },
            'C': {
                'text': 'Do not turn left or turn right',
            },
            'D': {
                'text': 'not pass solid lines or straddling the solid line but dashed lines may overtake when it is safe.',
            },
        },
        'picture': '58.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 59,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Can change traffic lanes or can overtake.',
            },
            'B': {
                'text': 'Do not go straight or turn right. Do not change lanes.',
            },
            'C': {
                'text': 'Do not turn left or turn right do not change lanes.',
            },
            'D': {
                'text': 'Drive to the left. Do not change lanes',
            },
        },
        'picture': '59.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 60,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Reduce speed and then speed up',
            },
            'B': {
                'text': 'Slow down if another car or pedestrian is in the way',
            },
            'C': {
                'text': 'Let the driver B slow down and then overtake.',
            },
            'D': {
                'text': 'Let the driver drive fast.',
            },
        },
        'picture': '60.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 61,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Allow pedestrians to cross.',
            },
            'B': {
                'text': 'Stop the car over the stop lines at any time.',
            },
            'C': {
                'text': 'Qpark the car over the line at any time',
            },
            'D': {
                'text': 'Stop-and-go zone at all times.',
            },
        },
        'picture': '61.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 62,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down. Turn right',
            },
            'B': {
                'text': 'Increase caution. Do not turn left',
            },
            'C': {
                'text': 'Slow down.Turn left',
            },
            'D': {
                'text': 'Drive in the lane. Do not overtake. Do not pass or straddle the lines.',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 63,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Arrive in the traffic lane. Do not straddle the line, but can overtake.',
            },
            'B': {
                'text': 'Increase caution. Do not change lanes',
            },
            'C': {
                'text': 'Slow down and drive straddling the line.',
            },
            'D': {
                'text': 'Increase caution and do not overtake',
            },
        },
        'picture': '63.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 64,
        'text': 'When the driver sees this road marking, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Let the driver drive fast.',
            },
            'B': {
                'text': 'Let the driver B slow down and then overtake.',
            },
            'C': {
                'text': 'Allow the driver to slow down and speed up first.',
            },
            'D': {
                'text': 'Stop the car before stop lines every time.',
            },
        },
        'picture': '64.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 65,
        'text': 'What does this road marking mean?',
        'answers': {
            'A': {
                'text': 'Safety zone or colored island',
            },
            'B': {
                'text': 'Car Park areas',
            },
            'C': {
                'text': 'Stop area',
            },
            'D': {
                'text': 'Stop-and-go zone',
            },
        },
        'picture': '65.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 66,
        'text': 'What does this road marking mean?',
        'answers': {
            'A': {
                'text': 'All types of automobiles can park.',
            },
            'B': {
                'text': 'All vehicles stop',
            },
            'C': {
                'text': 'Do not stop the car inside the diagonal frame. Do not stop the car, except waiting to turn right.',
            },
            'D': {
                'text': 'All types of cars can make a U-turn',
            },
        },
        'picture': '66.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 67,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not stop in this marked area.',
            },
            'B': {
                'text': 'Give way to another car first in the area with this sign',
            },
            'C': {
                'text': 'Overtaking in the area marked with this sign',
            },
            'D': {
                'text': 'Do not drive ahead of other cars in the area where the sign is installed.',
            },
        },
        'picture': '67.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 68,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Only personal cars are forbidden to enter where the sign is installed.',
            },
            'B': {
                'text': 'Do not drive all types of vehicles into the direction of the signage.',
            },
            'C': {
                'text': 'Pedestrians can walk where the sign is installed.',
            },
            'D': {
                'text': 'Drive into where the sign is installed.',
            },
        },
        'picture': '68.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 69,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Make a U-turn to the left',
            },
            'B': {
                'text': 'Make a U-turn to the right',
            },
            'C': {
                'text': 'Do not make left U-turn',
            },
            'D': {
                'text': 'Do not make right U-turn',
            },
        },
        'picture': '69.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 70,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'DO not make left U-turn',
            },
            'C': {
                'text': 'Make a U-turn to the right',
            },
            'B': {
                'text': 'Do not make right U-turn',
            },
            'D': {
                'text': 'Make a U-turn to the left',
            },
        },
        'picture': '70.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 71,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not turn left',
            },
            'B': {
                'text': 'Do not turn right',
            },
            'C': {
                'text': 'Turn left',
            },
            'D': {
                'text': 'Turn right',
            },
        },
        'picture': '71.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 72,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Turn left',
            },
            'B': {
                'text': 'Turn right',
            },
            'C': {
                'text': 'Do not turn left',
            },
            'D': {
                'text': 'Do not turn right',
            },
        },
        'picture': '72.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 73,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not change the lane to the right',
            },
            'C': {
                'text': 'Do not change the lane to the left',
            },
            'B': {
                'text': 'Change the lane to the right',
            },
            'D': {
                'text': 'Change the lane to the left',
            },
        },
        'picture': '73.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 74,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not change the lane to the right',
            },
            'B': {
                'text': 'Change the lane to the right',
            },
            'C': {
                'text': 'Do not change the lane to the left',
            },
            'D': {
                'text': 'To change the lane to the left',
            },
        },
        'picture': '74.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 75,
        'text': 'When-the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not turn right or U-turn',
            },
            'B': {
                'text': 'Do not turn left or U-turn',
            },
            'C': {
                'text': 'Turn right or U-turn',
            },
            'D': {
                'text': 'Turn left or U-turn',
            },
        },
        'picture': '75.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 76,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not turn left or U-turn',
            },
            'B': {
                'text': 'Turn left or U-turn',
            },
            'C': {
                'text': 'Turn left or turn right',
            },
            'D': {
                'text': 'Do not turn left or turn right',
            },
        },
        'picture': '76.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 77,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'All cars can enter where the sign is installed, area.',
            },
            'B': {
                'text': 'No vehicles are allowed to enter the signage',
            },
            'C': {
                'text': 'No cars are allowed to enter the signage area, installed.',
            },
            'D': {
                'text': 'Drop off in the area where the sign is',
            },
        },
        'picture': '77.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 78,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'No trucks are allowed to enter the area where the sign is installed.',
            },
            'B': {
                'text': 'Only the trucks can enter where the sign is installed.',
            },
            'C': {
                'text': 'No trailer of any kind are allowed to enter the signage area.',
            },
            'D': {
                'text': 'All kinds of trailers are allowed to enter the signage area.',
            },
        },
        'picture': '78.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 79,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'No cars are allowed',
            },
            'B': {
                'text': 'Motorcycles are allowed.',
            },
            'C': {
                'text': 'No motorcycles allowed',
            },
            'D': {
                'text': 'All cars are allowed to pass.',
            },
        },
        'picture': '79.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 80,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'No motorcycles and cars are allowed.',
            },
            'B': {
                'text': 'Do not park but picking up is allowed in the area where the sign is installed.',
            },
            'C': {
                'text': 'All vehicles are allowed to enter the signage area.',
            },
            'D': {
                'text': 'Motorcycles are allowed to enter the signage area.',
            },
        },
        'picture': '80.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 81,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Horn is allowed',
            },
            'B': {
                'text': 'Do not use horn',
            },
            'C': {
                'text': 'Don\'t park the car',
            },
            'D': {
                'text': 'Stop the car',
            },
        },
        'picture': '81.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 82,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'No parking for all vehicles',
            },
            'C': {
                'text': 'Parkail vehicles',
            },
            'B': {
                'text': 'All cars cannot stop.',
            },
            'D': {
                'text': 'Stop for all kinds of vehicle.',
            },
        },
        'picture': '82.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 83,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Carts and trolleys are forbidden.',
            },
            'B': {
                'text': 'Parking for motorcycles',
            },
            'C': {
                'text': 'No stopping or parking for all vehicles',
            },
            'D': {
                'text': 'Parking for bicycles.',
            },
        },
        'picture': '83.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 84,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Pedestrians only',
            },
            'B': {
                'text': 'Crossing zone.',
            },
            'C': {
                'text': 'Crossing',
            },
            'D': {
                'text': 'No pedestrians allowed',
            },
        },
        'picture': '84.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 85,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Weight not over 50 kg.',
            },
            'B': {
                'text': 'Do not use the horn if more than 50 decibels',
            },
            'C': {
                'text': 'Use speed more than 50 km/h.',
            },
            'D': {
                'text': 'Do not speed over 50 km/h',
            },
        },
        'picture': '85.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 86,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'All vehicles weighing more than 10 tons are allowed.',
            },
            'B': {
                'text': 'Car should not weigh more than 10 tons.',
            },
            'C': {
                'text': 'All over extended vehicles are not allowed',
            },
            'D': {
                'text': 'All types of vehicles that are wider than the limit are allowed',
            },
        },
        'picture': '86.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 87,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Stop the car and allow pedestrians to pass first. Drive when it is safe.',
            },
            'B': {
                'text': 'Only personal cars allowed because it is the main road.',
            },
            'C': {
                'text': 'Slow down and slowly continue.',
            },
            'D': {
                'text': 'Stop required for all kinds of car.',
            },
        },
        'picture': '87.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 88,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not make left U-turn',
            },
            'B': {
                'text': 'Do not make right U-turn',
            },
            'C': {
                'text': 'Give wav to the car or pedestrians in the lane ahead.',
            },
            'D': {
                'text': 'Make a U-turn to the right.',
            },
        },
        'picture': '88.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 89,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Stop at the sign and let the oncoming vehicles pass first.',
            },
            'B': {
                'text': 'Slow down and drive to the left.',
            },
            'C': {
                'text': 'Slow down and drive to the right.',
            },
            'D': {
                'text': '???',
            },
        },
        'picture': '89.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 90,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep going left.',
            },
            'C': {
                'text': 'Do not go straight ahead.',
            },
            'B': {
                'text': 'Do not drive into the area where the sign is installed.',
            },
            'D': {
                'text': 'One wav traffic ahead.',
            },
        },
        'picture': '90.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 91,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Don\'t drive on the right',
            },
            'C': {
                'text': 'Keep to the right lane only',
            },
            'B': {
                'text': 'One way traffic to the left.',
            },
            'D': {
                'text': 'No one way traffic to the left',
            },
        },
        'picture': '91.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 92,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'One wav traffic to the right',
            },
            'B': {
                'text': 'Going left one way',
            },
            'C': {
                'text': 'Don\'t drive on the right',
            },
            'D': {
                'text': 'Do not go one way',
            },
        },
        'picture': '92.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 93,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Don\'t keep right',
            },
            'B': {
                'text': 'Don\'t keep left',
            },
            'C': {
                'text': 'Keep right',
            },
            'D': {
                'text': 'Кеер left',
            },
        },
        'picture': '93.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 94,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Don\'t keep right',
            },
            'B': {
                'text': 'Don\'t keep left',
            },
            'C': {
                'text': 'Keep right',
            },
            'D': {
                'text': 'Keep left',
            },
        },
        'picture': '94.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 95,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep left or keep right',
            },
            'B': {
                'text': 'Do not keep either left or right',
            },
            'C': {
                'text': 'Keep left only',
            },
            'D': {
                'text': 'Keep right only',
            },
        },
        'picture': '95.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 96,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Turn left',
            },
            'B': {
                'text': 'Turn right',
            },
            'C': {
                'text': 'Do no turn left',
            },
            'D': {
                'text': 'Do not turn right',
            },
        },
        'picture': '96.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 97,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Turn left',
            },
            'B': {
                'text': 'Turn right',
            },
            'C': {
                'text': 'Do no turn left',
            },
            'D': {
                'text': 'Do not turn right',
            },
        },
        'picture': '97.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 98,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not turn either left or right',
            },
            'B': {
                'text': 'Turn left or turn right',
            },
            'C': {
                'text': 'Don\'t go straight or turn left',
            },
            'D': {
                'text': 'Straight ahead or turn right',
            },
        },
        'picture': '98.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 99,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Straight ahead but do not turn left',
            },
            'B': {
                'text': 'Straight ahead or turn left',
            },
            'C': {
                'text': 'Don\'t go straight or turn left',
            },
            'D': {
                'text': 'Don\'t go straight or turn right',
            },
        },
        'picture': '99.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 100,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Straight ahead or turn right',
            },
            'B': {
                'text': 'Straight ahead of turn left',
            },
            'C': {
                'text': 'Don\'t go straight or turn left',
            },
            'D': {
                'text': 'Don\'t go straight or turn right',
            },
        },
        'picture': '100.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 101,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Arriving to the left of the roundabout and stop to allow the car on the roundabout to go first.',
            },
            'B': {
                'text': 'One way on the left.',
            },
            'C': {
                'text': 'Drive all the cars on the right side of the roundabout.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 102,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not go straight or turn right.',
            },
            'C': {
                'text': 'Do not overtake into the bus lane.',
            },
            'B': {
                'text': 'Go straight or turn right',
            },
            'D': {
                'text': 'Cars and motorcycles lanes',
            },
        },
        'picture': '102.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 103,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Vehicles with not less than 3 people in them can use this lane.',
            },
            'B': {
                'text': 'Car with 1 passenger can be on this lane.',
            },
            'C': {
                'text': 'Cars with two people in them can enter into this lane.',
            },
            'D': {
                'text': 'Cars with more than 3 people are not allowed into these lanes.',
            },
        },
        'picture': '103.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 104,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Car lane',
            },
            'B': {
                'text': 'Bicycle path',
            },
            'C': {
                'text': 'Motorcycle lane',
            },
            'D': {
                'text': 'Pedestrian path',
            },
        },
        'picture': '104.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 105,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Do not turn right',
            },
            'B': {
                'text': 'Use speed',
            },
            'C': {
                'text': 'Turn left',
            },
            'D': {
                'text': 'End of mandatory zone',
            },
        },
        'picture': '105.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 106,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down. Sharp curve to the left ahead ahead',
            },
            'B': {
                'text': 'Slow down. Multiple bends first to the left',
            },
            'C': {
                'text': 'Slow down. Sharp curve to the right ahead ahead',
            },
            'D': {
                'text': 'Slow down. Multiple bends to the right',
            },
        },
        'picture': '106.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 107,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down. Sharp curve to the left ahead',
            },
            'B': {
                'text': 'Slow down. Sharp curve to the right ahead',
            },
            'C': {
                'text': 'Slow down Multiple bends first to the left ahead',
            },
            'D': {
                'text': 'Slow down. Multiple bends first to the right ahead',
            },
        },
        'picture': '107.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 108,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and keep right drive towards a double sharp curve, first to the left',
            },
            'B': {
                'text': 'Slow down and keep left drive towards a double sharp curve, first to the right',
            },
            'C': {
                'text': 'Slow down and keep right multiple bends first to the left ahead',
            },
            'D': {
                'text': 'siow down. Keep left with caution. Multiple bends first to the left ahead',
            },
        },
        'picture': '108.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 109,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and drive with caution. Secondary road ahead. Exit left.',
            },
            'B': {
                'text': 'Drive with caution. The roads ahead are secondary roads crossing one another in T- shape.',
            },
            'C': {
                'text': 'Drive with caution. The roads ahead are the main roads crossing one another in T- shape.',
            },
            'D': {
                'text': 'Drive with caution. The roads ahead are the main roads crossing one another in Y- shape.',
            },
        },
        'picture': '109.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 110,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be cautious. The main road splits from the main road on the right',
            },
            'B': {
                'text': 'Slow down and take caution. Secondary road ahead. Exit right.',
            },
            'C': {
                'text': 'Slow down and be cautious. Secondary road splits from another secondary on the right.',
            },
            'D': {
                'text': 'Slow down and be cautious. The main road splits from another main road on the left.',
            },
        },
        'picture': '110.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 111,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Secondary road from the main road diagonal to each other first to the left.',
            },
            'B': {
                'text': 'The main roads crossing one another in Y-shape.',
            },
            'C': {
                'text': 'Main roads crossing one another in T-shape',
            },
            'D': {
                'text': 'Main road crossing secondary road in Y-shape',
            },
        },
        'picture': '111.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 112,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'The main roads crossing one another in Y-shape.',
            },
            'B': {
                'text': 'Main roads crossing one another in Y-shape',
            },
            'C': {
                'text': 'Secondary road from the main road diagonal to each other first to the right',
            },
            'D': {
                'text': 'Main road crossing secondary road in Y-shape',
            },
        },
        'picture': '112.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 113,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Secondary road joins the main road from left.',
            },
            'B': {
                'text': 'Main roads crossing one another in Y-shape',
            },
            'C': {
                'text': 'Main roads crossing one another in - shape',
            },
            'D': {
                'text': 'The main road crossing the secondary road in Y-shape',
            },
        },
        'picture': '113.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 114,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'The secondary road merges to the main road from left.',
            },
            'B': {
                'text': 'Main road merges into another main road from left',
            },
            'C': {
                'text': 'Secondary road joins the main road from right.',
            },
            'D': {
                'text': 'Secondary road merges into another secondary road from left',
            },
        },
        'picture': '114.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 115,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Y-shape secondary road on the left',
            },
            'B': {
                'text': 'The main road splits from the main road in Y-shape.',
            },
            'C': {
                'text': 'Secondary road splits from another secondary road from left in Y-shape',
            },
            'D': {
                'text': 'Secondary road on the right in Y-shape',
            },
        },
        'picture': '115.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 116,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Secondary road on the left in Y-shape.',
            },
            'B': {
                'text': 'Y-shape secondary road on the right.',
            },
            'C': {
                'text': 'Main road splits from another main road from left in Y-shape',
            },
            'D': {
                'text': 'Secondary road splits from another secondary road from left in Y-shape',
            },
        },
        'picture': '116.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 117,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'The road ahead is a junction with a roundabout.',
            },
            'B': {
                'text': 'The road ahead is narrower.',
            },
            'C': {
                'text': 'Intersection ahead.',
            },
            'D': {
                'text': 'The road ahead are two mains roads crossing one another.',
            },
        },
        'picture': '117.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 118,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Right narrow lane',
            },
            'B': {
                'text': 'Left curve',
            },
            'C': {
                'text': 'Left narrow lane',
            },
            'D': {
                'text': 'The road ahead is narrow on both sides.',
            },
        },
        'picture': '118.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 119,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Narrow road, both sides',
            },
            'B': {
                'text': 'Left narrow lane',
            },
            'C': {
                'text': 'Right narrow lane',
            },
            'D': {
                'text': 'The road widened on both sides',
            },
        },
        'picture': '119.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 120,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Right narrow lane',
            },
            'B': {
                'text': 'Narrow road, both sides',
            },
            'C': {
                'text': 'Left narrow lane',
            },
            'D': {
                'text': 'The road widened on both sides',
            },
        },
        'picture': '120.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 121,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slowdown and be careful of the oncoming traffic from the other side of the bridge.',
            },
            'B': {
                'text': 'Slow down and be cautious. The road ahead is narrow.',
            },
            'C': {
                'text': 'Slow down and be cautious as the road ahead has fewer traffic lanes.',
            },
            'D': {
                'text': 'Slow down and be cautious. Left narrow lane ahead.',
            },
        },
        'picture': '121.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 122,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Right lane closed',
            },
            'B': {
                'text': 'Traffic lane closed on both sides.',
            },
            'C': {
                'text': 'Traffic lane reduced left.',
            },
            'D': {
                'text': 'Left lane closed',
            },
        },
        'picture': '122.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 123,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Both lane closed',
            },
            'C': {
                'text': 'Reduced traffic lanes on the left.',
            },
            'B': {
                'text': 'Left lane closed.',
            },
            'D': {
                'text': 'Right lane closed',
            },
        },
        'picture': '123.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 124,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down if there is a train passing. Stop at least 5 meters from the railway.',
            },
            'B': {
                'text': 'Drive with normal speed but be cautious of the train.',
            },
            'C': {
                'text': 'Drive fast because the train is passing.',
            },
            'D': {
                'text': 'Drive fast because or there is no obstacle.',
            },
        },
        'picture': '124.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 125,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down ready to stop the car. The road ahead has no barriers',
            },
            'B': {
                'text': 'Slow Down. Get ready to stop the car. Narrow bridge.',
            },
            'C': {
                'text': 'Slow down and get ready to stop where there are signals or barriers.',
            },
            'D': {
                'text': 'Drive fast because the train crossing has no barriers.',
            },
        },
        'picture': '125.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 126,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and increase caution. Vehicles not over 2.50 meters are allowed.',
            },
            'B': {
                'text': 'Slowdown and be cautious. The road ahead is wider than 2.50 meters. Allowed to pass.',
            },
            'C': {
                'text': 'Slow down and be cautious. The road ahead height less than 2.50 meters.',
            },
            'D': {
                'text': 'Slow down and be cautious. The road ahead allows heights over 2.50 meters.',
            },
        },
        'picture': '126.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 127,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be cautious. The road is narrow down to 2.50 meters. Allowed to pass',
            },
            'B': {
                'text': 'Slow down and be cautious. The width is over 2.50 meters. Traffic is allowed.',
            },
            'C': {
                'text': 'Slow down and be cautious. The road is over 2.50 meters in height.',
            },
            'D': {
                'text': 'Slow down and increase caution. Vehicles with a height not exceeding 2.50 meters are',
            },
        },
        'picture': '127.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 128,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slowdown and be careful of the dangers from the oncoming traffic. The road ahead is a steep hill ascent.',
            },
            'B': {
                'text': 'Slow down and be cautious. Prepare to drive pass quickly due to falling rocks.',
            },
            'C': {
                'text': 'Slow down and be cautious. Release gear or shut down immediately for safety.',
            },
            'D': {
                'text': 'Slow down and be cautious. Steep hill descent. Use neutral gear.',
            },
        },
        'picture': '128.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 129,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Steep hill descent',
            },
            'B': {
                'text': 'Steep Hill Ascent',
            },
            'C': {
                'text': 'Curvy road',
            },
            'D': {
                'text': 'Narrow Bridge',
            },
        },
        'picture': '129.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 130,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down. Increase caution. Falling rocks.',
            },
            'B': {
                'text': 'Slow down Increase caution. Slippery.',
            },
            'C': {
                'text': 'Slow down and increase caution. Very rough surface.',
            },
            'D': {
                'text': 'Slow down. Increase caution. Crumbling surface.',
            },
        },
        'picture': '130.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 131,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and increase caution. Uneven surface, road.',
            },
            'B': {
                'text': 'Slow down and be cautious. Steep hill descent ascent.',
            },
            'D': {
                'text': 'Slow down and cautious. Steep hill.',
            },
        },
        'picture': '131.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 132,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be careful. Curve ahead.',
            },
            'B': {
                'text': 'Slow down and be careful. Right narrow lane',
            },
            'C': {
                'text': 'Slow down and be cautious. Crumbling surface.',
            },
            'D': {
                'text': 'Slowdown and be careful of slippery surface. Do not brake suddenly.',
            },
        },
        'picture': '132.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 133,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slowdown and be careful of the hazards of loose gravel material.',
            },
            'B': {
                'text': 'Slow down and beware of falling rocks.',
            },
            'C': {
                'text': 'Slow down and be careful. Slippery road.',
            },
            'D': {
                'text': 'Slow down and be cautious of the curvy road.',
            },
        },
        'picture': '133.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 134,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and take extra caution. Narrow road.',
            },
            'B': {
                'text': 'Slow down and take extra caution. Steep hill descent.',
            },
            'C': {
                'text': 'Slow down and take extra caution. Steep Hill Ascent',
            },
            'D': {
                'text': 'Slow down and be careful of the road ahead. There might be fallen rocks.',
            },
        },
        'picture': '134.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 135,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Draw bridge',
            },
            'B': {
                'text': 'Rough surface',
            },
            'C': {
                'text': 'Warning car jumping.',
            },
            'D': {
                'text': 'Uneven surface',
            },
        },
        'picture': '135.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 136,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Don\'t exit to the frontage road',
            },
            'B': {
                'text': 'Change lanes according to the signage.',
            },
            'C': {
                'text': 'Do not change lanes.',
            },
            'D': {
                'text': 'Exit to the frontage road',
            },
        },
        'picture': '136.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 137,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Drivers on the frontage road merge to the main road, beware of traffic on the main road.',
            },
            'B': {
                'text': 'Drivers on the frontage road prepare to exit a right curve',
            },
            'C': {
                'text': 'The driver on the main road prepare to exit a left curve',
            },
            'D': {
                'text': 'Drivers on the main road prepare to merge into a frontage road',
            },
        },
        'picture': '137.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 138,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Drivers on the main road prepare for the multiple bends first to the left',
            },
            'B': {
                'text': 'The driver on the main road prepares to leave curvy road starting from left.',
            },
            'C': {
                'text': 'The drivers on the main road prepare to enter the curvy road starts from right.',
            },
            'D': {
                'text': 'Drivers on the main road prepare to join a frontage road, beware of traffic on frontage road.',
            },
        },
        'picture': '138.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 139,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be careful. There may be cars merging from the left ahead.',
            },
            'B': {
                'text': 'Slow down and be careful. Right curve ahead.',
            },
            'C': {
                'text': 'Slow down and be cautious. The road ahead is a sharp curve to the left',
            },
            'D': {
                'text': 'Slow down and be careful. Curve left ahead',
            },
        },
        'picture': '139.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 140,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be careful. Merge left ahead.',
            },
            'B': {
                'text': 'Slow down and be careful. Dual lanes ahead.',
            },
            'C': {
                'text': 'Slow down and be careful. There may be cars merging from the right ahead.',
            },
            'D': {
                'text': 'Slow down and be careful. Main roads ahead.',
            },
        },
        'picture': '140.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 141,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Drive to the left with caution. The road ahead has double lanes with islands.',
            },
            'B': {
                'text': 'Drive to the left with caution. The road ahead is steep hill descent.',
            },
            'C': {
                'text': 'Keep left with caution. The road ahead is narrow lane on the right.',
            },
            'D': {
                'text': 'Drive to the left with caution. Left narrow lane ahead.',
            },
        },
        'picture': '141.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 142,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down, keep left and be cautious. Shared lanes ahead on the left.',
            },
            'B': {
                'text': 'Slow down, keep left and be cautious. Dual lanes ahead.',
            },
            'C': {
                'text': 'Slow down, keep left and be cautious. Merged traffic on the right.',
            },
            'D': {
                'text': 'Slow down, keep left and be cautious. The road ahead is joint way without traffic island',
            },
        },
        'picture': '142.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 143,
        'text': 'What does the sign mean?',
        'answers': {
            'A': {
                'text': 'U-turn right ahead.',
            },
            'C': {
                'text': 'Left curve ahead.',
            },
            'B': {
                'text': 'Do not make U-turn ahead.',
            },
            'D': {
                'text': 'The road ahead is the end of dual lanes.',
            },
        },
        'picture': '143.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 144,
        'text': 'What does the sign mean?',
        'answers': {
            'A': {
                'text': 'U-turn right ahead.',
            },
            'B': {
                'text': 'End of dual lanes ahead.',
            },
            'C': {
                'text': 'Left curve ahead.',
            },
            'D': {
                'text': 'Turn left ahead.',
            },
        },
        'picture': '144.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 145,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and keep left. The road ahead is one way.',
            },
            'B': {
                'text': 'Slowdown and keep left. Be careful of the oncoming traffic.',
            },
            'C': {
                'text': 'Slow down and keep left. The road ahead is the one way left.',
            },
            'D': {
                'text': 'Slow down and keep left. One way on the right ahead.',
            },
        },
        'picture': '145.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 146,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and ready to enter the two-way traffic.',
            },
            'B': {
                'text': 'Slow down and ready to make a U-turn on the road ahead.',
            },
            'C': {
                'text': 'Slow Down and get ready to follow traffic light signals',
            },
            'D': {
                'text': 'Slow down and prepare to go one way forward.',
            },
        },
        'picture': '146.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 147,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Arrive slowly and be careful to stop at the sign.',
            },
            'B': {
                'text': 'Drivers should prepare to turn left.',
            },
            'C': {
                'text': 'Drivers should be prepared to park the car.',
            },
            'D': {
                'text': 'Drivers prepare to give way.',
            },
        },
        'picture': '147.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 148,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and get ready to drive in the two-way traffic',
            },
            'B': {
                'text': 'Slow down and be prepared to give way to the front car.',
            },
            'C': {
                'text': 'Slow down and get ready to go in the one-way lane.',
            },
            'D': {
                'text': '',
            },
        },
        'picture': '148.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 149,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down. Pedestrian crossing.',
            },
            'B': {
                'text': 'Slow down because men at work ahead.',
            },
            'C': {
                'text': 'Slow down because the road ahead has a lot of school children.',
            },
            'D': {
                'text': 'Slow down. School children ahead.',
            },
        },
        'picture': '149.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 150,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down School ahead. Be cautious of bicycle users.',
            },
            'B': {
                'text': 'School ahead. Slow down, Accident and danger from oncoming traffic.',
            },
            'C': {
                'text': 'School ahead. Slow down. Be aware because it is for pedestrians only.',
            },
            'D': {
                'text': 'In front of the school slow down, be cautious of the school children.',
            },
        },
        'picture': '150.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 151,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Drive slowly and carefully, there may be animals crossing the road.',
            },
            'B': {
                'text': 'Slow down and beware of pedestrians crossing, children.',
            },
            'C': {
                'text': 'Drive slowly and watch out for',
            },
            'D': {
                'text': 'Drive slower and be careful. Zoo ahead.',
            },
        },
        'picture': '151.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 152,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Meeting point at the airport.',
            },
            'B': {
                'text': 'Low flying planes.',
            },
            'C': {
                'text': 'Parking area in the airport',
            },
            'D': {
                'text': 'Pickup area at the airport.',
            },
        },
        'picture': '152.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 153,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be cautious. The road ahead may not be safe due to accident or uneven surface.',
            },
            'B': {
                'text': 'Slow down and be careful of school children because it is school area',
            },
            'C': {
                'text': 'Slow down and beware of fierce animals as it is a forest reserve.',
            },
            'D': {
                'text': 'Slow down and be cautious of pedestrian special crossing because of busy traffic.',
            },
        },
        'picture': '153.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 154,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Overtake zone.',
            },
            'B': {
                'text': 'Do not overtake zone.',
            },
            'C': {
                'text': 'Give way zone',
            },
            'D': {
                'text': 'Stop zone.',
            },
        },
        'picture': '154.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 155,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down, then change lanes in the direction indicated by the sign.',
            },
            'B': {
                'text': 'Slow down, no lanes change. Keep right.',
            },
            'C': {
                'text': 'Slow down, no lanes change. Keep left.',
            },
            'D': {
                'text': 'Slow down. No lanes change. Do not overtake.',
            },
        },
        'picture': '155.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 156,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Oncoming vehicles ahead',
            },
            'C': {
                'text': 'Right sharp curve then bend to straight',
            },
            'B': {
                'text': 'Left sharp curve then bend to straight',
            },
            'D': {
                'text': 'Left curve',
            },
        },
        'picture': '156.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 157,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Left curve ahead',
            },
            'B': {
                'text': 'Right curve ahead',
            },
            'C': {
                'text': 'Road ahead is right sharp curve then bend to straight',
            },
            'D': {
                'text': 'Left sharp curve',
            },
        },
        'picture': '157.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 158,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down, keep right and follow multiple bends from the left',
            },
            'B': {
                'text': 'Slow down and keep left. Follow right sharp curve ahead',
            },
            'C': {
                'text': 'Slow down and keep right. Follow left sharp curve ahead',
            },
            'D': {
                'text': 'Slow down and keep left. Exercise caution. The road ahead is multiple bends from the right',
            },
        },
        'picture': '158.png',
        'correctAnswerId': 'D',
    },
    {
        'id': 159,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep driving slowly and be careful. Men at work',
            },
            'B': {
                'text': 'Slow down and be cautious. Survey ahead.',
            },
            'C': {
                'text': 'Slow down. And be cautious Operating machines',
            },
            'D': {
                'text': 'Slow down and be cautious. Workers inspecting construction.',
            },
        },
        'picture': '159.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 160,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep driving slowly and be careful. Survey on the road ahead',
            },
            'B': {
                'text': 'Slow down and be cautious. Men at work.',
            },
            'C': {
                'text': 'Slow down and be cautious. Operating machines',
            },
            'D': {
                'text': 'Slow down and be cautious. Workers inspecting construction.',
            },
        },
        'picture': '160.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 161,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep driving slowly and be careful. Operating machines',
            },
            'B': {
                'text': 'Slow down and be cautious. Men at work.',
            },
            'C': {
                'text': 'Slow down and be cautious. Road survey ahead.',
            },
            'D': {
                'text': 'Slow down and be cautious. Workers inspecting construction.',
            },
        },
        'picture': '161.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 162,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and be careful. The wav forward requires a left diverted lane.',
            },
            'B': {
                'text': 'Slow down. Increase caution, The road ahead is narrow bridge.',
            },
            'C': {
                'text': 'Slow down Increase caution. Steep hill descent ahead.',
            },
            'D': {
                'text': 'Slow down. Steep hill ascent ahead.',
            },
        },
        'picture': '162.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 163,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down. The road ahead requires a right diverted lane',
            },
            'B': {
                'text': 'Slow down. The road ahead is steep hill ascent.',
            },
            'C': {
                'text': 'Slow down Increase caution. Steep hill descent ahead.',
            },
            'D': {
                'text': 'Slow down. Increase caution. Narrow bridge ahead.',
            },
        },
        'picture': '163.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 164,
        'text': 'What does this sign mean?',
        'answers': {
            'A': {
                'text': 'Start of expressway (Motorway)',
            },
            'C': {
                'text': 'No U-turn.',
            },
            'B': {
                'text': 'Flyoverfor pedestrian',
            },
            'D': {
                'text': 'Do not overtake',
            },
        },
        'picture': '164.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 165,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and U-turn when safe.',
            },
            'B': {
                'text': 'Drive slowly and do not U-turn.',
            },
            'C': {
                'text': 'Drive slowly and U-turn for cars only.',
            },
            'D': {
                'text': 'Drive slowly and turn left.',
            },
        },
        'picture': '165.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 166,
        'text': 'When the driver sees this sign, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down, be careful and stop the car to pedestrian crossing.',
            },
            'B': {
                'text': 'Slow down and be careful. U-turn is allowed.',
            },
            'C': {
                'text': 'Slow down, be careful as it is pedestrian crossing.',
            },
            'D': {
                'text': 'Slow down. Be careful of bicycles lanes.',
            },
        },
        'picture': '166.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 167,
        'text': 'At which of the following places is sounding the car horn NOT allowed?',
        'answers': {
            'A': {
                'text': 'School',
            },
            'B': {
                'text': 'Intersection with traffic lights',
            },
            'C': {
                'text': 'Bus stop',
            },
            'D': {
                'text': 'Road',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 168,
        'text': 'At which of the following places is sounding the car horn NOT allowed?',
        'answers': {
            'A': {
                'text': 'Hospital',
            },
            'B': {
                'text': 'Intersection with traffic lights',
            },
            'C': {
                'text': 'Bus stop',
            },
            'D': {
                'text': 'Road',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 169,
        'text': 'What must a driver do when s/he wants to make a turn?',
        'answers': {
            'A': {
                'text': 'Slow down and turn on indicator signals before the turn in not less than 30 meters.',
            },
            'B': {
                'text': 'Turn on the indicator light signals 20 meter before the turn.',
            },
            'C': {
                'text': 'Stop the car and prepare to turn.',
            },
            'D': {
                'text': 'Accelerate before turn',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 170,
        'text': 'When a RED CROSS signal is lit above the traffic lane, what does this prohibit the driver from doing?',
        'answers': {
            'A': {
                'text': 'Drive in that lane.',
            },
            'B': {
                'text': 'Park the car in that lane.',
            },
            'D': {
                'text': 'Stop in that lane.',
            },
            'C': {
                'text': 'Stop and park the car in that lane.',
            },
        },
        'picture': '170.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 171,
        'text': 'When the traffic officer stands and stretches his left arm to shoulder level, what must the driver do?',
        'answers': {
            'A': {
                'text': 'Rear',
            },
            'B': {
                'text': 'Side',
            },
            'C': {
                'text': 'Front and rear',
            },
            'D': {
                'text': 'Front',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 172,
        'text': 'When the traffic officer stands and stretches his lower part of the right arm in perpendicular to the upper arm and raises the palm, on which side of the traffic must the driver stop his car?',
        'answers': {
            'A': {
                'text': 'Rear',
            },
            'B': {
                'text': 'Side and rear',
            },
            'C': {
                'text': 'Front and rear',
            },
            'D': {
                'text': 'Front',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 173,
        'text': 'When driving through a shared intersection which shows a blinking red traffic light, what must the iriverdo?',
        'answers': {
            'A': {
                'text': 'Stop the car after stop lines. When it is safe to drive continue with caution.',
            },
            'B': {
                'text': 'Slow down and pass that lane with caution.',
            },
            'C': {
                'text': 'Prepare to park the car at the crossroads.',
            },
            'D': {
                'text': 'Speed up your car and go through it quickly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 174,
        'text': 'When driving through a shared intersection which shows a blinking yellow traffic light, what must the driver do?',
        'answers': {
            'A': {
                'text': 'Reduce the speed and pass that lane with care.',
            },
            'B': {
                'text': 'Stop behind stop lines. When it is safe, continue with caution.',
            },
            'C': {
                'text': 'Prepare to stop the car at the crossroads.',
            },
            'D': {
                'text': 'Speed up your car and go through it quickly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 175,
        'text': 'What does it mean when a driver gives a signal by stretching his right arm out of the car at shoulder level and waves it up and down several times?',
        'answers': {
            'A': {
                'text': 'Stop the car',
            },
            'B': {
                'text': 'Will reduce the speed of the car.',
            },
            'C': {
                'text': 'Turn right',
            },
            'D': {
                'text': 'Park the car',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 176,
        'text': 'The driver must turn on the headlights or rear lights within a distance of not less than how many meters so that other drivers can see his/her car?',
        'answers': {
            'B': {
                'text': '100',
            },
            'C': {
                'text': '120',
            },
            'D': {
                'text': '150',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 177,
        'text': 'Who has no obligation to provide traffic signals under the Land Traffic Act BE 2522?',
        'answers': {
            'A': {
                'text': 'Motorcycle riders',
            },
            'B': {
                'text': 'Traffic officer',
            },
            'C': {
                'text': 'Drivers',
            },
            'D': {
                'text': 'Pedestrian',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 178,
        'text': 'In which area is the use of horn allowed?',
        'answers': {
            'A': {
                'text': 'School',
            },
            'B': {
                'text': 'Hospital',
            },
            'C': {
                'text': 'Public park',
            },
            'D': {
                'text': 'Government office',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 179,
        'text': 'When can the horn be used?',
        'answers': {
            'A': {
                'text': 'Always use',
            },
            'B': {
                'text': 'Use as needed to prevent accidents.',
            },
            'C': {
                'text': 'Use as convenient',
            },
            'D': {
                'text': 'It can be used when the car in front is slow.',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 180,
        'text': 'Before changing lanes or turning, the turn signal must be given in advance from no less than how nany meters?',
        'answers': {
            'A': {
                'text': '15 meters',
            },
            'B': {
                'text': '10 meters',
            },
            'C': {
                'text': '3 meters',
            },
            'D': {
                'text': '30 meters',
            },
        },
        'correctAnswerId': 'D',
    },
    {
        'id': 181,
        'text': 'From what distance must other drivers be able to see your turning signal?',
        'answers': {
            'A': {
                'text': 'Not less than 10 meters',
            },
            'B': {
                'text': 'Not less than 60 meters',
            },
            'C': {
                'text': 'Not less than 15 meters',
            },
            'D': {
                'text': 'Not less than 30 meters',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 182,
        'text': 'How should you use hand signals to indicate to other drivers your intention to turn?',
        'answers': {
            'A': {
                'text': 'Do need to give any hand signals.',
            },
            'B': {
                'text': 'Give signals with both left and right hands',
            },
            'C': {
                'text': 'Give hand signals only with the right hand.',
            },
            'D': {
                'text': 'Give hand signals only by left hand.',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 183,
        'text': 'From the picture, the driver A wants to drive straight on, what must be done?',
        'answers': {
            'A': {
                'text': 'Stop and wait for the car B to pass first.',
            },
            'B': {
                'text': 'Stop and wait for the car C to pass',
            },
            'C': {
                'text': '',
            },
            'D': {
                'text': 'Wait for the car B and',
            },
        },
        'picture': '183.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 184,
        'text': 'What do white-red marks on the road edge mean?',
        'answers': {
            'A': {
                'text': 'Do not park but stop the car for a while',
            },
            'B': {
                'text': 'Don\'t stop but can park all kinds of vehicle',
            },
            'C': {
                'text': 'No stopping, no parking for all vehicles',
            },
            'D': {
                'text': 'No parking for all vehicles except cars',
            },
        },
        'picture': '184.png',
        'correctAnswerId': 'C',
    },
    {
        'id': 185,
        'text': 'From the picture, which car has the right to go first?',
        'answers': {
            'A': {
                'text': 'The car B because it is in the main road.',
            },
            'B': {
                'text': 'The car A because it is on the secondary ro',
            },
            'C': {
                'text': 'The car A because it is in the main road.',
            },
            'D': {
                'text': 'The car B is in the secondary road.',
            },
        },
        'picture': '185.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 186,
        'text': 'Which is the correct action during a traffic jam when car B cannot move forward and car A needs to drive straight on?',
        'answers': {
            'A': {
                'text': 'Stop the car and wait for the car B to pass first.',
            },
            'C': {
                'text': 'Drive with the car B on the right.',
            },
            'B': {
                'text': 'Drive after the car B to avoid the gap.',
            },
            'D': {
                'text': 'Drive after the car B and turn on emergem lights.',
            },
        },
        'picture': '186.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 187,
        'text': 'From the picture, what must this driver do?',
        'answers': {
            'A': {
                'text': 'Drive through immediately.',
            },
            'B': {
                'text': 'Stop the car and wait for the car ahead to pass first.',
            },
            'C': {
                'text': 'Drive the car immediately because there is a give way sign.',
            },
            'D': {
                'text': 'Slow down and stop over the dash lines to see the car from the right.',
            },
        },
        'picture': '187.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 188,
        'text': 'From the picture, what must this driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and stop over the dashed lines in order to see the car from the right.',
            },
            'B': {
                'text': 'Stop the car and wait for the car ahead to pass first.',
            },
            'C': {
                'text': 'Drive through right away because it is the dash lines.',
            },
            'D': {
                'text': '???',
            },
        },
        'picture': '188.png',
        'correctAnswerId': 'B',
    },
    {
        'id': 189,
        'text': 'From the following pictures, which one shows correct parking?',
        'answers': {
            'A': {
                'text': '',
                'picture': '189A.png',
            },
            'B': {
                'text': '',
                'picture': '189B.png',
            },
            'C': {
                'text': '',
                'picture': '189C.png',
            },
            'D': {
                'text': '',
                'picture': '189D.png',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 190,
        'text': 'From the following pictures, which one shows correct parking?',
        'answers': {
            'A': {
                'text': '',
                'picture': '190A.png',
            },
            'B': {
                'text': '',
                'picture': '190B.png',
            },
            'C': {
                'text': '',
                'picture': '190C.png',
            },
            'D': {
                'text': '',
                'picture': '190D.png',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 191,
        'text': 'From the following pictures, which one shows incorrect parking?',
        'answers': {
            'A': {
                'text': '',
                'picture': '191A.png',
            },
            'B': {
                'text': '',
                'picture': '191B.png',
            },
            'C': {
                'text': '',
                'picture': '191C.png',
            },
            'D': {
                'text': '',
                'picture': '191D.png',
            },
        },
        'correctAnswerId': 'B',
    },
    {
        'id': 192,
        'text': 'Which picture is the correct way of turning?',
        'answers': {
            'A': {
                'text': '',
                'picture': '192A.png',
            },
            'B': {
                'text': '',
                'picture': '192B.png',
            },
            'C': {
                'text': '',
                'picture': '192C.png',
            },
            'D': {
                'text': '',
                'picture': '192D.png',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 193,
        'text': 'Which picture in the following is correct?',
        'answers': {
            'A': {
                'text': '',
                'picture': '193A.png',
            },
            'B': {
                'text': '',
                'picture': '193B.png',
            },
            'C': {
                'text': '',
                'picture': '193C.png',
            },
            'D': {
                'text': '',
                'picture': '193D.png',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 194,
        'text': 'Booth cars at intersection the same time, which car has the right to go first?',
        'answers': {
            'A': {
                'text': 'The car B',
            },
            'B': {
                'text': 'Both the car A and the car B',
            },
            'C': {
                'text': 'The car arriving at the intersection first',
            },
            'D': {
                'text': 'The car A',
            },
        },
        'picture': '194.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 195,
        'text': 'From the picture, what must this driver do?',
        'answers': {
            'A': {
                'text': 'Do not overtake into the right lane',
            },
            'C': {
                'text': 'The driver can turn right.',
            },
            'B': {
                'text': 'U-turn is allowed.',
            },
            'D': {
                'text': 'Park the car',
            },
        },
        'picture': '195.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 196,
        'text': 'At the intersection with no traffic lights, if arriving at the same time, which car has the right to go first?',
        'answers': {
            'A': {
                'text': 'The car B',
            },
            'B': {
                'text': 'The car arriving at the intersection first.',
            },
            'C': {
                'text': 'The car A',
            },
            'D': {
                'text': 'Both the car A and the car B',
            },
        },
        'picture': '196.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 197,
        'text': 'From the picture, what must the car A do?',
        'answers': {
            'A': {
                'text': 'Stop the car so that the car from the left passes first.',
            },
            'B': {
                'text': 'Slow down so that the cars left and right go first.',
            },
            'C': {
                'text': 'Stop the car to let the car on the right go first.',
            },
            'D': {
                'text': 'Drive through the intersection right away.',
            },
        },
        'picture': '197.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 198,
        'text': 'From the picture, which car can overtake the others?',
        'answers': {
            'A': {
                'text': 'The car A',
            },
            'B': {
                'text': 'The car B',
            },
            'C': {
                'text': 'The car A and B',
            },
            'D': {
                'text': 'Motorcycles',
            },
        },
        'picture': '198.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 199,
        'text': 'Which picture is correct?',
        'answers': {
            'A': {
                'text': '',
                'picture': '199A.png',
            },
            'B': {
                'text': '',
                'picture': '199B.png',
            },
            'C': {
                'text': '',
                'picture': '199C.png',
            },
            'D': {
                'text': '',
                'picture': '199D.png',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 200,
        'text': 'What must drive A do when he needs to turn right and there is an oncoming car?',
        'answers': {
            'A': {
                'text': 'Wait for the oncoming traffic to stop before you turn right',
            },
            'B': {
                'text': 'Stop. Let the car to the right go first then turn right',
            },
            'C': {
                'text': 'Turn right away',
            },
            'D': {
                'text': 'Do not turn left',
            },
        },
        'picture': '200.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 201,
        'text': 'If two cars turn left and turn right at the same time on the same route, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Those who turn left must stop and give way to the car that turns from the right',
            },
            'B': {
                'text': 'Those who turn left can do right away',
            },
            'C': {
                'text': 'Those who turn right must stop giving way to the car that turns from the left',
            },
            'D': {
                'text': 'Do not turn left',
            },
        },
        'picture': '201.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 202,
        'text': 'When the car in front gives signals for turning or changing of lanes what must the driver behind do?',
        'answers': {
            'A': {
                'text': 'Slow down and give way to him',
            },
            'C': {
                'text': 'Park the car',
            },
            'B': {
                'text': 'Stop the car',
            },
            'D': {
                'text': 'Speed up to go first',
            },
        },
        'picture': '202.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 203,
        'text': 'Should patients with coronary artery disease be driving a vehicle?',
        'answers': {
            'A': {
                'text': 'Should avoid.',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles.',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 204,
        'text': 'Which drug does NOT cause side effects to driving?',
        'answers': {
            'A': {
                'text': 'Sore throat lozenge',
            },
            'B': {
                'text': 'Coughing liquid (black mixture)',
            },
            'C': {
                'text': 'Analgesic muscle relaxant.',
            },
            'D': {
                'text': 'Antihistamine drugs',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 205,
        'text': 'Should people take sleeping pills and tranquilizers before and while driving a vehicle?',
        'answers': {
            'A': {
                'text': 'Should not for all cases',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 206,
        'text': 'Do nausea drugs have any side effects that interfere with driving?',
        'answers': {
            'A': {
                'text': 'There may be dizziness, blurred vision.',
            },
            'B': {
                'text': 'Yes, but not related to driving.',
            },
            'C': {
                'text': 'None',
            },
            'D': {
                'text': 'Depending on the severity of the disease',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 207,
        'text': 'All medicines from pharmacies can be taken without having any effect on driving. True or false.',
        'answers': {
            'A': {
                'text': 'No',
            },
            'B': {
                'text': 'Yes',
            },
            'C': {
                'text': 'Depending on food taken',
            },
            'D': {
                'text': 'Depending on the type of vehicle driven',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 208,
        'text': 'Drivers should NOT drink alcohol before driving, yes or no?',
        'answers': {
            'A': {
                'text': 'Yes, because it makes the body respond slower.',
            },
            'B': {
                'text': 'Depending on food taken',
            },
            'C': {
                'text': 'No',
            },
            'D': {
                'text': 'Depending on the type of vehicle driven',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 209,
        'text': 'Drivers should NOT take sleeping pills before driving, yes or no?',
        'answers': {
            'A': {
                'text': 'Yes',
            },
            'B': {
                'text': 'Depending on food taken',
            },
            'C': {
                'text': 'No',
            },
            'D': {
                'text': 'Depending on the type of vehicle driven',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 210,
        'text': 'Drivers should NOT take antihistamines before driving, yes or no?',
        'answers': {
            'A': {
                'text': 'Yes',
            },
            'B': {
                'text': 'Depending on food taken',
            },
            'C': {
                'text': 'No',
            },
            'D': {
                'text': 'Depending on the type of vehicle driven',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 211,
        'text': 'Nausea drugs have a dizzying side effect, yes or no?',
        'answers': {
            'A': {
                'text': 'Yes, use with caution.',
            },
            'B': {
                'text': 'Depending on food taken',
            },
            'C': {
                'text': 'No',
            },
            'D': {
                'text': 'Depending on the type of vehicle driven',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 212,
        'text': 'You can still drive even if you suffer from one of the following illnesses. Choose ONE.',
        'answers': {
            'A': {
                'text': 'Gingivitis',
            },
            'B': {
                'text': 'Diabetes (injection)',
            },
            'C': {
                'text': 'Apoplexy',
            },
            'D': {
                'text': 'Ischemic heart disease',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 213,
        'text': 'Can an epileptic patient drive a vehicle?',
        'answers': {
            'A': {
                'text': 'No for all cases',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 214,
        'text': 'Is a person who has lost an eye allowed to drive if s/he has been certified as having normal vision by an ophthalmologist?',
        'answers': {
            'A': {
                'text': 'Yes',
            },
            'B': {
                'text': 'Only private vehicles',
            },
            'C': {
                'text': 'Not for all cases',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 215,
        'text': 'Can a person who has lost his right arm be allowed to drive?',
        'answers': {
            'A': {
                'text': 'Yes, but must show the ability to drive and control the vehicle well.',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles.',
            },
            'D': {
                'text': 'Not for all cases',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 216,
        'text': 'Is a person with an hearing impairment allowed to drive?',
        'answers': {
            'A': {
                'text': 'Only private vehicles.',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Not for all cases',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 217,
        'text': 'What is the right action before driving?',
        'answers': {
            'A': {
                'text': 'Mr. B has had a diabetic\'s injection, so he stops driving.',
            },
            'B': {
                'text': 'just took antihistamines and drive',
            },
            'C': {
                'text': 'Ms. C lacks of sleep and drive.',
            },
            'D': {
                'text': 'Ms. A drinks alcohol and drive.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 218,
        'text': 'What precaution should a driver undertake if he has to take antihistamines or motion sickness drugs that cause dizziness and drowsiness before driving?',
        'answers': {
            'A': {
                'text': 'Refrain from driving because of drowsiness.',
            },
            'C': {
                'text': 'Rest for 10 minutes and continue driving.',
            },
            'D': {
                'text': 'Driving allowed but must drink a lot of watei',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 219,
        'text': 'Are people with chest pains and suspected heart disease allowed to drive?',
        'answers': {
            'A': {
                'text': 'No for all cases',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 220,
        'text': 'Is a person with an inability to speak able to drive?',
        'answers': {
            'A': {
                'text': 'Yes',
            },
            'B': {
                'text': 'Yes but must accompanied by other people',
            },
            'C': {
                'text': 'Should not drive',
            },
            'D': {
                'text': 'None is correct',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 221,
        'text': 'Can a person with a heart disease or history of myocardial infarction be able to drive a vehicle?',
        'answers': {
            'A': {
                'text': 'Should not for all cases',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 222,
        'text': 'Can diabetics drive?',
        'answers': {
            'A': {
                'text': 'Yes, if there are no risk factors for unconsciousness and can control the vehicle.',
            },
            'B': {
                'text': 'Yes after stopping all medications.',
            },
            'C': {
                'text': 'Should not drive',
            },
            'D': {
                'text': 'None is correct',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 223,
        'text': 'Are people with severe muscular disease allowed to drive a vehicle?',
        'answers': {
            'A': {
                'text': 'Should not for all cases',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 224,
        'text': 'Should you drive if you have been diagnosed with brain cancer?',
        'answers': {
            'A': {
                'text': 'Should not due to risk of seizures',
            },
            'B': {
                'text': 'Yes for all cases',
            },
            'C': {
                'text': 'Only private vehicles',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 225,
        'text': 'Mr.',
        'answers': {
            'A': {
                'text': 'Should not',
            },
            'B': {
                'text': 'Yes',
            },
            'C': {
                'text': 'Only private vehicles',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 226,
        'text': 'Can people with vision problems that can be corrected by wearing glasses drive?',
        'answers': {
            'A': {
                'text': 'Yes',
            },
            'B': {
                'text': 'Only private vehicles',
            },
            'C': {
                'text': 'Should not',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 227,
        'text': 'What is a possible effect for people who have been injured and in recovery (such as the removal of the cast after treatment) and have not driven for a long time?',
        'answers': {
            'A': {
                'text': 'The ability to control the vehicle temporarily reduced.',
            },
            'B': {
                'text': 'No effects at all.',
            },
            'C': {
                'text': 'Permanent disability',
            },
            'D': {
                'text': 'Change the way of driving.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 228,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'Hypertensive patients should not drive.',
            },
            'B': {
                'text': 'Short sighted persons cannot drive public',
            },
            'C': {
                'text': 'Diabetes person cannot drive private car.',
            },
            'D': {
                'text': 'HIV-infected patients cannot drive.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 229,
        'text': 'Can people who are deaf and mute drive?',
        'answers': {
            'A': {
                'text': 'Only private vehicles',
            },
            'B': {
                'text': 'Yes',
            },
            'C': {
                'text': 'Should not',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 230,
        'text': 'Can people who have eye damage in only one eye (the other eye is normal) drive?\\',
        'answers': {
            'A': {
                'text': 'Only private vehicles.',
            },
            'B': {
                'text': 'Yes',
            },
            'C': {
                'text': 'Should not',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 231,
        'text': 'Can a person with hypotension drive?',
        'answers': {
            'A': {
                'text': 'Yes.',
            },
            'B': {
                'text': 'Only private vehicles.',
            },
            'C': {
                'text': 'Should not',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 232,
        'text': 'Can persons with cardiac arrhythmias drive a vehicle?',
        'answers': {
            'A': {
                'text': 'Yes, if there is no symptoms affecting the control of the vehicle?',
            },
            'B': {
                'text': 'Only private vehicles.',
            },
            'C': {
                'text': 'Should not',
            },
            'D': {
                'text': 'Only public vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 233,
        'text': 'If the car battery shows signs of acid stains, what is the best solution?',
        'answers': {
            'A': {
                'text': 'Use warm water to wash and apply grease.',
            },
            'B': {
                'text': 'Rinse with vinegar',
            },
            'C': {
                'text': 'Rinse with lemon juice.',
            },
            'D': {
                'text': 'Rinse by using ground water.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 234,
        'text': 'To remove the battery terminals, what should be removed first?',
        'answers': {
            'A': {
                'text': 'Cathode',
            },
            'B': {
                'text': 'Any terminal',
            },
            'C': {
                'text': 'Anode',
            },
            'D': {
                'text': 'Both terminals simultaneously.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 235,
        'text': 'What type of water should be used in the battery?',
        'answers': {
            'A': {
                'text': 'Distilled water',
            },
            'B': {
                'text': 'Rain water',
            },
            'C': {
                'text': 'Groundwater',
            },
            'D': {
                'text': 'Soap water',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 236,
        'text': 'Which of the following is the correct procedure to check your tire pressure?',
        'answers': {
            'A': {
                'text': 'Use a tire gauge.',
            },
            'B': {
                'text': 'Hit the tires with iron bar.',
            },
            'C': {
                'text': 'With the naked eye',
            },
            'D': {
                'text': 'Use your hand',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 237,
        'text': 'Up to what level should you add distilled water when refilling your car battery?',
        'answers': {
            'A': {
                'text': 'Keep between low and high.',
            },
            'B': {
                'text': 'Add a little bit lower the limit.',
            },
            'C': {
                'text': 'Fill up to a slightly higher from the specified level.',
            },
            'D': {
                'text': 'Fill up to overflow and close the lid.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 238,
        'text': 'Which is the wrong way of using clutch?',
        'answers': {
            'A': {
                'text': 'While driving down the steep slope.',
            },
            'B': {
                'text': 'While stopping',
            },
            'C': {
                'text': 'While starting the engine.',
            },
            'D': {
                'text': 'While changing the gear.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 239,
        'text': 'Which is not the function of lubricant?',
        'answers': {
            'A': {
                'text': 'Help cooling of the radiator',
            },
            'B': {
                'text': 'Reduce engine wear.',
            },
            'C': {
                'text': 'Reduce friction between the skin',
            },
            'D': {
                'text': 'Reduces engine frictions.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 240,
        'text': 'When should the oil level in the engine be checked?',
        'answers': {
            'A': {
                'text': 'While the engine is cool.',
            },
            'B': {
                'text': 'Right after turning off the engine.',
            },
            'C': {
                'text': 'As the engine runs',
            },
            'D': {
                'text': 'While parking the car on the hill.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 241,
        'text': 'How could you conduct a simple test to check how much power your car battery has left?',
        'answers': {
            'A': {
                'text': 'Blow the horn and listen to the sound whether it is normal or light.',
            },
            'B': {
                'text': 'Move the car a short distance then test the brake',
            },
            'C': {
                'text': 'Press the clutch and shift gear',
            },
            'D': {
                'text': 'Check steering moves to the left and right.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 242,
        'text': 'What are the causes of acid stains on the battery terminals?',
        'answers': {
            'A': {
                'text': 'Acid vapors reacting with air.',
            },
            'B': {
                'text': 'Because of dust',
            },
            'C': {
                'text': 'Water splashes on the battery terminal',
            },
            'D': {
                'text': 'Dirty battery terminal insulation',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 243,
        'text': 'What is the function of a car battery?',
        'answers': {
            'A': {
                'text': 'Distribute and collect electricity',
            },
            'B': {
                'text': 'Turn off the engine.',
            },
            'C': {
                'text': 'Power cut',
            },
            'D': {
                'text': 'Generate electricity in cars',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 244,
        'text': 'What is the function of the car starter motor?',
        'answers': {
            'A': {
                'text': 'Start the engine',
            },
            'B': {
                'text': 'Makes the brakes work better.',
            },
            'C': {
                'text': 'Make the temperature in the car cooler.',
            },
            'D': {
                'text': 'Steering comfortably.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 245,
        'text': 'What cause the red warning light to appear after a car has been driving for a while?',
        'answers': {
            'A': {
                'text': 'Power failure',
            },
            'B': {
                'text': 'Engine overheats',
            },
            'C': {
                'text': 'Fuel empty',
            },
            'D': {
                'text': 'Boiling radiator.',
            },
        },
        'picture': '245.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 246,
        'text': 'Which is the correct way to fuel your vehicle engine?',
        'answers': {
            'A': {
                'text': 'Fill the tank with the fuel with octane value as specified in the vehicle manual.',
            },
            'B': {
                'text': 'Fill in below the suggested level to save on fuel',
            },
            'C': {
                'text': 'Fill up above the value set to prevent engine damage.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 246,
        'text': 'If the wrong type of fuel is used, what should you do?',
        'answers': {
            'A': {
                'text': 'Replace immediately.',
            },
            'B': {
                'text': 'Fill with a cheaper kind to dilute.',
            },
            'C': {
                'text': 'Drive to the fuel station and fill with the right type.',
            },
            'D': {
                'text': 'Drive until it affects the engine, then take it out.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 247,
        'text': 'If you detect an oil leakage, what should you do?',
        'answers': {
            'A': {
                'text': 'Change the tube/hose carrying the oil',
            },
            'B': {
                'text': 'Switch the hose to a low pressure hose.',
            },
            'C': {
                'text': 'Use tightening tape.',
            },
            'D': {
                'text': 'Use it until there is only a drop of oil left.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 248,
        'text': 'If your vehicle has a leaky fuel line, what should you do?',
        'answers': {
            'A': {
                'text': 'Do not drive further because of possible fire.',
            },
            'B': {
                'text': 'Drive to the repair center.',
            },
            'C': {
                'text': 'Use tape straps and drive to find a mechanic.',
            },
            'D': {
                'text': 'Take the bottle to receive the oil leak and continue to drive.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 249,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'Do not add lubricant to mix with the fuel.',
            },
            'B': {
                'text': 'Refueling should only be done during the day',
            },
            'D': {
                'text': 'The expensive oil is the best oil.',
            },
            'C': {
                'text': 'Cannot fill octane 95 to replace octane 91.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 250,
        'text': 'What should you do while you refuel?',
        'answers': {
            'A': {
                'text': 'Engine off',
            },
            'C': {
                'text': 'Do not do anything',
            },
            'B': {
                'text': 'Get out of the car and walk a distance.',
            },
            'D': {
                'text': 'Keep the engine running',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 251,
        'text': 'When checking for leaks in the fuel system, what you should do?',
        'answers': {
            'A': {
                'text': 'Use observation and smell.',
            },
            'B': {
                'text': 'Wipe with soap',
            },
            'C': {
                'text': 'Use a lighter if you do not see it.',
            },
            'D': {
                'text': 'Use the hand to feel the defect of the rubber tube.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 252,
        'text': 'Where do you check your vehicle\'s oil level?',
        'answers': {
            'A': {
                'text': 'Oil gauge',
            },
            'B': {
                'text': 'Oil basin',
            },
            'C': {
                'text': 'Oil cap',
            },
            'D': {
                'text': 'Oil filter',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 253,
        'text': 'Which is the correct step before checking and filling the car with lubricant?',
        'answers': {
            'A': {
                'text': 'Parking on a flat surface, check oil while engine off or has not been started for at least 10 minutes.',
            },
            'B': {
                'text': 'Park the car on flat ground, check the oil while the engine is still on.',
            },
            'C': {
                'text': 'Park the car on ground level, check the gasoline after the engine immediately switched off.',
            },
            'D': {
                'text': 'Park the car on the flat ground, Check the oil while the engine is running or turn off the engine immediately.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 254,
        'text': 'What is the method for checking for any oil leakage from the engine?',
        'answers': {
            'A': {
                'text': 'Look at the parking area and observe the joint or engine joints.',
            },
            'B': {
                'text': 'Notice the loud noise of the engine.',
            },
            'C': {
                'text': 'Observe the smell of engine oil.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 255,
        'text': 'If the car tire is too soft, how does it affect the tire?',
        'answers': {
            'A': {
                'text': 'Tread worn on both sides of the tire.',
            },
            'B': {
                'text': 'The middle tread will wear faster than normal.',
            },
            'C': {
                'text': 'Driving is hard.',
            },
            'D': {
                'text': 'Vehicle consumes less fuel.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 256,
        'text': 'If the car tire is too hard, how does it affect the tire?',
        'answers': {
            'A': {
                'text': 'The middle tire will wear faster than normal.',
            },
            'B': {
                'text': 'Driving is smoother.',
            },
            'C': {
                'text': 'Vehicle consumes more fuel.',
            },
            'D': {
                'text': 'Side tires wear faster than normal.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 257,
        'text': 'How often should your car tires be checked?',
        'answers': {
            'A': {
                'text': 'Every time before use.',
            },
            'B': {
                'text': 'Once a day',
            },
            'C': {
                'text': 'Once a week',
            },
            'D': {
                'text': 'Once a month',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 258,
        'text': 'Which one does not cause a car tire explosion?',
        'answers': {
            'A': {
                'text': 'Regular tire inflation',
            },
            'B': {
                'text': 'Use old tires',
            },
            'C': {
                'text': 'Use expired tires',
            },
            'D': {
                'text': 'Overloading capacity',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 259,
        'text': 'How does the tire work?',
        'answers': {
            'A': {
                'text': 'Helps to keep the car from slipping on the road.',
            },
            'B': {
                'text': 'For engine modification',
            },
            'C': {
                'text': 'Gives power to the car',
            },
            'D': {
                'text': 'For cooling',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 260,
        'text': 'What should you ensure you do when inflating the tire?',
        'answers': {
            'A': {
                'text': 'Follow the car manual',
            },
            'B': {
                'text': 'Tap and listen',
            },
            'C': {
                'text': 'Assume by sight',
            },
            'D': {
                'text': 'Fill as you want',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 261,
        'text': 'What is the benefit of the rubber covering on the tire?',
        'answers': {
            'A': {
                'text': 'Prevent air leakage and dirt',
            },
            'B': {
                'text': 'Tire protection',
            },
            'C': {
                'text': 'Prevent theft of tires',
            },
            'D': {
                'text': 'Prevent other people from filling up the tires',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 262,
        'text': 'Which of the following unusual sounds coming from your car may indicate that it needs servicing?',
        'answers': {
            'A': {
                'text': 'Noisy brake',
            },
            'C': {
                'text': 'Indicator turn signals sound noisy.',
            },
            'B': {
                'text': 'Emergency lights sound noisy',
            },
            'D': {
                'text': 'Reversing lights sound noisy',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 263,
        'text': 'Which of the following does NOT cause car engine start failure?',
        'answers': {
            'A': {
                'text': 'Belt slack',
            },
            'B': {
                'text': 'Battery terminals loose',
            },
            'C': {
                'text': 'Fuel running out',
            },
            'D': {
                'text': 'Starter motor breaks down',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 264,
        'text': 'Which is NOT the cause of the overheated engine?',
        'answers': {
            'A': {
                'text': 'Distilled water, dry battery',
            },
            'B': {
                'text': 'Water in radiator dried up',
            },
            'C': {
                'text': 'Broken fan belt',
            },
            'D': {
                'text': 'Oil empty',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 265,
        'text': 'In which of the following situations should the hand brake be used?',
        'answers': {
            'A': {
                'text': 'To park or stop on a steep slope',
            },
            'B': {
                'text': 'For slowing down the vehicle',
            },
            'C': {
                'text': 'For slowing down the vehicle',
            },
            'D': {
                'text': 'For slowing down the vehicle',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 266,
        'text': 'What should be done to extend the life of the brake pads?',
        'answers': {
            'A': {
                'text': 'When stopping the car brake gently.',
            },
            'B': {
                'text': 'Use brake excessively',
            },
            'C': {
                'text': 'When using brake, turn the steering wheel a little bit to the left and right.',
            },
            'D': {
                'text': 'Always use handbrake together with the foot brake when stopping the car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 267,
        'text': 'What equipment does NOT increase the performance of the vehicle brakes?',
        'answers': {
            'A': {
                'text': 'Steering wheel',
            },
            'B': {
                'text': 'Tires',
            },
            'C': {
                'text': 'Gears',
            },
            'D': {
                'text': 'Suspension system',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 268,
        'text': 'What are the signs that tell you that the brake may be ON when the car is moving?',
        'answers': {
            'A': {
                'text': 'When the car moves, it gives a feel of slow acceleration.',
            },
            'B': {
                'text': 'Car feels faster when it moves off.',
            },
            'C': {
                'text': 'When turning the steering wheel, it feels heavy.',
            },
            'D': {
                'text': 'Engine stumbles when on',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 269,
        'text': 'What is the color of deteriorated brake fluid?',
        'answers': {
            'A': {
                'text': 'Black',
            },
            'B': {
                'text': 'Blue',
            },
            'C': {
                'text': 'Red',
            },
            'D': {
                'text': 'Yellow',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 270,
        'text': 'There is noise when pressing the brake pedal, why?',
        'answers': {
            'A': {
                'text': 'The brake pads are dirty or the brake pads are depleted.',
            },
            'B': {
                'text': 'Tires expired',
            },
            'C': {
                'text': 'Too low pressure in tires.',
            },
            'D': {
                'text': 'Hard tires',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 271,
        'text': 'What is the function of the engine oil?',
        'answers': {
            'A': {
                'text': 'Lubricate moving parts to reduce wear.',
            },
            'C': {
                'text': 'Cooling the brake pads',
            },
            'B': {
                'text': 'Cool the radiator.',
            },
            'D': {
                'text': 'Clean the radiator',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 272,
        'text': 'What happens when the engine oil level is too low?',
        'answers': {
            'A': {
                'text': 'The parts of the engine wear very quickly.',
            },
            'B': {
                'text': 'There will be more fuel economy',
            },
            'C': {
                'text': 'Life of the engine parts will be extended.',
            },
            'D': {
                'text': 'The vehicle will be given more power and will be easy to start.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 273,
        'text': 'What is the best way to measure the engine oil level?',
        'answers': {
            'A': {
                'text': 'Pull out and read the oil gauge.',
            },
            'C': {
                'text': 'Look for any drops of oil.',
            },
            'B': {
                'text': 'Listen to the engine sound',
            },
            'D': {
                'text': 'Open the engine oil cover.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 274,
        'text': 'What does the car radiator do?',
        'answers': {
            'A': {
                'text': 'Cools the engine',
            },
            'C': {
                'text': 'Cools the passenger compartment',
            },
            'B': {
                'text': 'Makes the car runs faster',
            },
            'D': {
                'text': 'For saving oil',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 275,
        'text': 'How much water should be filled in the car radiator?',
        'answers': {
            'A': {
                'text': 'Fill up between the highest and lowest levels',
            },
            'B': {
                'text': 'Fill up the highest level',
            },
            'C': {
                'text': 'Fill lower than minimum level',
            },
            'D': {
                'text': 'Fill up the lid',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 276,
        'text': 'If a hot engine warning symbol appears, what should you do?',
        'answers': {
            'A': {
                'text': 'Pour water into the engine to cool the engine.',
            },
            'B': {
                'text': 'Add water to the reserve tank when the engine is cooler',
            },
            'C': {
                'text': 'Open the bonnet to cool.',
            },
            'D': {
                'text': 'Turn off air conditioning. Open the windows and park the car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 277,
        'text': 'The radiator lid should not be opened under which of the following situations?',
        'answers': {
            'A': {
                'text': 'Dver-heated engine',
            },
            'B': {
                'text': 'Open in the morning while the engine not yet started.',
            },
            'C': {
                'text': 'Cold engine',
            },
            'D': {
                'text': 'When you are opening the reservoir tank to fill up the water.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 278,
        'text': 'What is the best way to prevent the engine from being overheated?',
        'answers': {
            'A': {
                'text': 'Check the water level in the radiator before use every day',
            },
            'B': {
                'text': 'Add more tires pressure than usual',
            },
            'C': {
                'text': 'Turns the car air conditioning to the full',
            },
            'D': {
                'text': 'Change the fan to bigger one.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 279,
        'text': 'Which of the car tires must be measured when checking the tires pressure?',
        'answers': {
            'A': {
                'text': 'AII four wheels and spare tire',
            },
            'C': {
                'text': 'Only rear wheels',
            },
            'B': {
                'text': 'Only front wheels',
            },
            'D': {
                'text': 'Only the wheel only with low pressure tire.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 280,
        'text': 'Which one is wrong?',
        'answers': {
            'A': {
                'text': 'Spare tire is not required.',
            },
            'C': {
                'text': 'Always have a battery charger cord in the car. the engine.',
            },
            'B': {
                'text': 'A jack is used to lift the car.',
            },
            'D': {
                'text': 'Fire equipment should use when there is fire on',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 281,
        'text': 'Which one is wrong when you check car engine before driving?',
        'answers': {
            'A': {
                'text': 'Always use groundwater to extend battery life',
            },
            'B': {
                'text': 'Check for possible defects of light signals around the car',
            },
            'C': {
                'text': 'Switch off the engine before you conduct oil check.',
            },
            'D': {
                'text': 'Check tire pressure regularly',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 282,
        'text': 'Which of the following is the wrong way to check and maintain car equipment?',
        'answers': {
            'A': {
                'text': 'Fill the reserve tank with ground water',
            },
            'C': {
                'text': 'Use distilled water to fill the battery.',
            },
            'B': {
                'text': 'Always fill the oil above the top level',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 283,
        'text': 'What type of water should be filled into the reserve tank?',
        'answers': {
            'A': {
                'text': 'Groundwater',
            },
            'B': {
                'text': 'Rainwater',
            },
            'C': {
                'text': 'Distilled water',
            },
            'D': {
                'text': 'Tap water',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 284,
        'text': 'What should be done for checking the tightness of the engine belt?',
        'answers': {
            'A': {
                'text': 'Use your fingers to press the engine belt.',
            },
            'C': {
                'text': 'Check the belt with the naked eye.',
            },
            'B': {
                'text': 'Start the engine for the sound of the belt.',
            },
            'D': {
                'text': 'Use hand to feel the engine belt.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 285,
        'text': 'Which of the following is the correct way to check your car\'s electrical system?',
        'answers': {
            'A': {
                'text': 'Check left and right indicator lights and high/low headlights - dim lights - brake lights - license plate lights.',
            },
            'B': {
                'text': 'Check left/ right indicator lights',
            },
            'C': {
                'text': 'Check headlight and left/right indicator lights',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 286,
        'text': 'The reserve tank should be filled up to what level?',
        'answers': {
            'A': {
                'text': 'Between high and low levels indicated at the water tank',
            },
            'B': {
                'text': 'Full tank',
            },
            'C': {
                'text': 'Fill up as you want',
            },
            'D': {
                'text': 'Half a bucket',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 287,
        'text': 'Why shouldn\'t you fill up the reserve tank to full?',
        'answers': {
            'A': {
                'text': 'Because of space reserved for the expansion of water when heated.',
            },
            'B': {
                'text': 'It will cause engine damage.',
            },
            'C': {
                'text': 'Because the water in the radiator is hotter.',
            },
            'D': {
                'text': 'It will make the radiator rustier.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 288,
        'text': 'What is the cause of car starting failure?',
        'answers': {
            'A': {
                'text': 'Battery has no power',
            },
            'B': {
                'text': 'Clogged air filter',
            },
            'C': {
                'text': 'Brake fluid out',
            },
            'D': {
                'text': 'Water in radiator dried up',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 289,
        'text': 'Before driving, what should a good driver do to prepare himself?',
        'answers': {
            'A': {
                'text': 'Have enough rest',
            },
            'B': {
                'text': 'Drink alcohol',
            },
            'C': {
                'text': 'Take amphetamines',
            },
            'D': {
                'text': 'Have a late night',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 290,
        'text': 'Which one needs to be checked before driving the car?',
        'answers': {
            'A': {
                'text': 'Check tires pressure, brake, fuel',
            },
            'B': {
                'text': 'Check tire pressure',
            },
            'C': {
                'text': 'Have enough rest',
            },
            'D': {
                'text': 'Renew driving license',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 291,
        'text': 'What kind of parking could cause an accident?',
        'answers': {
            'A': {
                'text': 'Double parking',
            },
            'B': {
                'text': 'Parking the car along the left edge of the road',
            },
            'C': {
                'text': 'Park the car in the parking lot',
            },
            'D': {
                'text': 'Park the car inside the parking building',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 292,
        'text': 'What gear should be used to drive up or down the slope?',
        'answers': {
            'A': {
                'text': 'Low gear',
            },
            'B': {
                'text': 'High gear',
            },
            'C': {
                'text': 'Neutral gear',
            },
            'D': {
                'text': 'Any gear',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 293,
        'text': 'What should you do when driving on an unfamiliar road?',
        'answers': {
            'A': {
                'text': 'Observe traffic signs or symbols',
            },
            'B': {
                'text': 'High speed',
            },
            'C': {
                'text': 'Use horn signals along the way.',
            },
            'D': {
                'text': 'Turn on emergency light signals throughout the route.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 294,
        'text': 'Why do cars often slip after it has been raining?',
        'answers': {
            'A': {
                'text': 'Rain water will make coat the tires making them slippy.',
            },
            'B': {
                'text': 'Rain will rinse the road clean.',
            },
            'C': {
                'text': 'Rain causes the road to be bumpy.',
            },
            'D': {
                'text': 'Concrete road absorbs rainwater wel',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 295,
        'text': 'Which of the following should not be done while driving in heavy rain?',
        'answers': {
            'A': {
                'text': 'Bevere braking and fast driving.',
            },
            'B': {
                'text': 'Speed up to 20 km/h',
            },
            'D': {
                'text': 'Slow down and increase caution.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 296,
        'text': 'When you drive through puddles, the brake pads get wet. How can you dry them?',
        'answers': {
            'A': {
                'text': 'Drive slowly, press brake pedal lightly and release several times.',
            },
            'B': {
                'text': 'Press brake pedal gently',
            },
            'C': {
                'text': 'Drive fast',
            },
            'D': {
                'text': 'Park the car in neutral gear and accelerate for 10 minutes.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 297,
        'text': 'While driving the car through water, why should you control the clutch and accelerate more than usual?',
        'answers': {
            'A': {
                'text': 'To prevent engine from stalling.',
            },
            'B': {
                'text': 'To give the car more speed.',
            },
            'C': {
                'text': 'To heat the engine.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 298,
        'text': 'What should you do after driving through flooded areas?',
        'answers': {
            'A': {
                'text': 'Drive slowly behind the vehicle in front at a reasonable distance.',
            },
            'B': {
                'text': 'Do not use the brake.',
            },
            'C': {
                'text': 'Try driving closer to the car in front all the time.',
            },
            'D': {
                'text': 'Turn on emergency lights at all times.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 299,
        'text': 'After driving through the flooded area, which system should you check first?',
        'answers': {
            'A': {
                'text': 'Brake system',
            },
            'B': {
                'text': 'Engine start system',
            },
            'C': {
                'text': 'Electrical system',
            },
            'D': {
                'text': 'Suspension',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 300,
        'text': 'What safety measure should a driver prepare before driving?',
        'answers': {
            'A': {
                'text': 'Have enough sleep',
            },
            'B': {
                'text': 'Consuming nerve stimulating drink.',
            },
            'C': {
                'text': 'Renew car registration',
            },
            'D': {
                'text': 'Fill up the tank until full',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 301,
        'text': 'Which is the most important cause of road accidents?',
        'answers': {
            'A': {
                'text': 'The driver',
            },
            'B': {
                'text': 'Road',
            },
            'D': {
                'text': 'Environment',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 302,
        'text': 'Which one is bad driving behavior?',
        'answers': {
            'A': {
                'text': 'Drive without paying consideration to other road users',
            },
            'B': {
                'text': 'Drive slowly and close to the left edge.',
            },
            'C': {
                'text': 'Driving in the town must not exceed 80 km/h',
            },
            'D': {
                'text': 'Driving outside the town must not exceed 90 km/h',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 303,
        'text': 'Which of the following is the safest thing to do before driving your car away from the left side of the road?',
        'answers': {
            'A': {
                'text': 'Look at the right side mirror. Turn on the right indicator light and turn your head over to the right shoulder to the back before leaving the car.',
            },
            'B': {
                'text': 'Check the right hand side mirror.',
            },
            'C': {
                'text': 'Turn on left indicator lights. Turn your head to the left.',
            },
            'D': {
                'text': 'Check the rearview mirror.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 304,
        'text': 'What system should you test and check from a distance of 3 to 4 meters after alighting from your car?',
        'answers': {
            'A': {
                'text': 'Brake system',
            },
            'B': {
                'text': 'Any adjustments needed for the rearview mirror.',
            },
            'C': {
                'text': 'Any adjustments needed for the side mirrors',
            },
            'D': {
                'text': 'Indicator signals',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 305,
        'text': 'Which is the correct gear to use when driving up and down a hill?',
        'answers': {
            'A': {
                'text': 'Ascending and descending, use low gear',
            },
            'B': {
                'text': 'Descending use low gear and ascending high gear.',
            },
            'C': {
                'text': 'Ascending use low gear and descending use neutral gear.',
            },
            'D': {
                'text': 'Ascending and descending, use high gear.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 306,
        'text': 'The engine is overheating while driving, what should drivers do after stopping in a safe place?',
        'answers': {
            'A': {
                'text': 'Let the engine cool first',
            },
            'B': {
                'text': 'Use ice to immerse the engine',
            },
            'C': {
                'text': 'Open the radiator cap and fill the water immediately',
            },
            'D': {
                'text': 'Pour water over the engine',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 307,
        'text': 'When is it not necessary to turn on the indicator signals?',
        'answers': {
            'A': {
                'text': 'Fora mandatory turn',
            },
            'B': {
                'text': 'When turning left into the alley.',
            },
            'C': {
                'text': 'When turning left from the alley.',
            },
            'D': {
                'text': 'When making a U-turn',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 308,
        'text': 'What will be the impact on the car gears if the clutch pedal is not fully depressed?',
        'answers': {
            'A': {
                'text': 'The gear will be noisy',
            },
            'B': {
                'text': 'The gears will be better than ever',
            },
            'C': {
                'text': 'Shifting the gear is easier',
            },
            'D': {
                'text': 'There will be a fuel saving',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 309,
        'text': 'If you start moving the car and release the clutch too soon, what will be the effect?',
        'answers': {
            'A': {
                'text': 'The vehicle will shudder and shut down',
            },
            'B': {
                'text': 'Thevehiclewillmoveofffast',
            },
            'C': {
                'text': 'The vehicle will gain power',
            },
            'D': {
                'text': 'The vehicle will be easier to control',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 310,
        'text': 'When driving through a shared intersection, what kind of light signals must not be turned on?',
        'answers': {
            'A': {
                'text': 'Emergency light',
            },
            'B': {
                'text': 'Dim lights',
            },
            'C': {
                'text': 'Headlights',
            },
            'D': {
                'text': 'Low light',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 311,
        'text': 'Before driving into a bend/curve or turning corner, what speed should be used?',
        'answers': {
            'A': {
                'text': 'The speed to suit the curve is or turn',
            },
            'B': {
                'text': 'Use steady speed',
            },
            'C': {
                'text': 'Sped up more than ever',
            },
            'D': {
                'text': 'Slow down as much as possible',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 312,
        'text': 'Why should drivers use a low gear when going down a ramp?',
        'answers': {
            'A': {
                'text': 'To slow the speed of the car.',
            },
            'B': {
                'text': 'To increase the power of the car.',
            },
            'C': {
                'text': 'To reduce the heat of the engine.',
            },
            'D': {
                'text': 'To Speed up the car',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 313,
        'text': 'What do worn or expired tires look like?',
        'answers': {
            'A': {
                'text': 'Cracks along the tire.',
            },
            'B': {
                'text': 'The tires will be completely black.',
            },
            'C': {
                'text': 'The tire will be white.',
            },
            'D': {
                'text': 'The water will not cover the tires when wet.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 314,
        'text': 'How would the front wheel tires with low pressure impact on driving?',
        'answers': {
            'A': {
                'text': 'Wear at front tire wheels and the car consumes more fuel',
            },
            'B': {
                'text': 'The car always seemed jerky.',
            },
            'C': {
                'text': 'Fuel will be saved, but tires will we;',
            },
            'D': {
                'text': 'It will save wear on the tires but more fuel will be consumed',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 315,
        'text': 'Which is an incorrect way to look while driving?',
        'answers': {
            'A': {
                'text': 'Look at things that are not related to driving.',
            },
            'B': {
                'text': 'Look at the different road conditior',
            },
            'C': {
                'text': 'Look at the movement of cars and people.',
            },
            'D': {
                'text': 'look for herds of animals crossing the road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 316,
        'text': 'What should NOT be done while driving along a bend at night?',
        'answers': {
            'A': {
                'text': 'Give several horn warnings before the bend',
            },
            'B': {
                'text': 'Give a warning by using high-low lights',
            },
            'C': {
                'text': 'Slow down to fit the curve.',
            },
            'D': {
                'text': 'Use more caution to drive.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 317,
        'text': 'When should you turn on the high beam lights?',
        'answers': {
            'A': {
                'text': 'Turn on the high beams while there is no oncoming traffic',
            },
            'B': {
                'text': 'Turn on high lights during heavy rains.',
            },
            'C': {
                'text': 'Turn on high lights when there has been a car accident.',
            },
            'D': {
                'text': 'Turn on the high beams when driving behind the car in front.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 318,
        'text': 'When should the tires be checked?',
        'answers': {
            'A': {
                'text': 'When the tires are still cool.',
            },
            'B': {
                'text': 'Check it whenever they need it',
            },
            'C': {
                'text': 'While carrying heavy loads',
            },
            'D': {
                'text': 'While running for about 2 hours.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 319,
        'text': 'What should you do when driving a car through the water?',
        'answers': {
            'A': {
                'text': 'Accelerate the engine slightly higher than normal.',
            },
            'B': {
                'text': 'Put on your high beam lights',
            },
            'C': {
                'text': 'Accelerate with speed.',
            },
            'D': {
                'text': 'Turn on emergency lights',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 320,
        'text': 'Which one causes a longer braking distance?',
        'answers': {
            'A': {
                'text': 'More weight in the vehicle',
            },
            'B': {
                'text': 'Reaction speed of the driver to make decision',
            },
            'C': {
                'text': 'Brake pedal speed',
            },
            'D': {
                'text': 'Load weight reduction',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 321,
        'text': 'Drivers should NOT use their hand brakes in which of the following situations?',
        'answers': {
            'A': {
                'text': 'Driving down the slope',
            },
            'B': {
                'text': 'When stopping at traffic lights',
            },
            'C': {
                'text': 'When parking the car',
            },
            'D': {
                'text': 'When stopping on a steep slope',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 322,
        'text': 'Which of the following is the wrong action to take before a road trip?',
        'answers': {
            'A': {
                'text': 'Drink alcohol before making a trip.',
            },
            'B': {
                'text': 'Preparing the car to be ready.',
            },
            'C': {
                'text': 'Studying the route',
            },
            'D': {
                'text': 'Preparing the body of the car',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 323,
        'text': 'Which of the following give you a longer stopping/braking distance?',
        'answers': {
            'A': {
                'text': 'Lubricant',
            },
            'B': {
                'text': 'Road surface condition',
            },
            'C': {
                'text': 'Loading additional weight on vehicle',
            },
            'D': {
                'text': 'Speed of car',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 324,
        'text': 'If you want to drive through the crossroads, what should you do?',
        'answers': {
            'A': {
                'text': 'Reduce speed and increase caution before crossing.',
            },
            'B': {
                'text': 'Drive at the same speed.',
            },
            'C': {
                'text': 'Be careful of the car on the left because it is near your lane.',
            },
            'D': {
                'text': 'Watch out for the car on the right and continue driving.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 325,
        'text': 'What is the right driving etiquette and safe behavior if you want to drive straight through as shown in the picture?',
        'answers': {
            'A': {
                'text': 'Slow down and let the car on the right go first.',
            },
            'B': {
                'text': 'Continue driving since we are on the main road.',
            },
            'C': {
                'text': 'Drive at the same speed.',
            },
            'D': {
                'text': 'Accelerate the engine so that you pass first.',
            },
        },
        'picture': '325.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 326,
        'text': 'If you see Traffic Light Signals turned yellow, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow step on the brake pedal to warm the car behind and stop',
            },
            'B': {
                'text': 'Accelerate and pass',
            },
            'C': {
                'text': 'Blow the horn and drive away.',
            },
            'D': {
                'text': 'Press the brake to stop the car immediately.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 327,
        'text': 'What must you do if you want to turn left?',
        'answers': {
            'A': {
                'text': 'Turn indicator signal lights on, slow down and turn when safe.',
            },
            'B': {
                'text': 'Turn left right away',
            },
            'C': {
                'text': 'Accelerate to be able to turn faster',
            },
            'D': {
                'text': 'Blow the horn before turning the car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 328,
        'text': 'If you want to turn left as in the picture below, what would a safe and careful driver do?',
        'answers': {
            'A': {
                'text': 'Turn on the indicator signals, slow down and turn when safe',
            },
            'B': {
                'text': 'Drive along the car in front and turn right.',
            },
            'C': {
                'text': 'Blow the horn to make people walk across the road quickly.',
            },
            'D': {
                'text': 'Turn on emergency light signals to alert the vehicle behind.',
            },
        },
        'picture': '328.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 329,
        'text': 'If you want to turn right as in the picture below, what would a safe and careful driver do?',
        'answers': {
            'A': {
                'text': 'Stop and wait at a position to turn and turn when safe.',
            },
            'B': {
                'text': 'Accelerate to turn right immediately',
            },
            'C': {
                'text': 'Drive to the right lane to make a turn.',
            },
            'D': {
                'text': 'Should turn to keep up because a larger vehicle obstructs the opposite side.',
            },
        },
        'picture': '329.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 330,
        'text': 'If you want to drive straight ahead as in the picture below, what would safe and careful driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and give way to the car that is turning out',
            },
            'B': {
                'text': 'Blow the horn to speed up the car in front',
            },
            'C': {
                'text': 'Continue with the same speed.',
            },
            'D': {
                'text': 'Turn on emergency lights and drive fast.',
            },
        },
        'picture': '330.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 331,
        'text': 'Why must a driver look over their shoulder before changing traffic lanes?',
        'answers': {
            'A': {
                'text': 'To check the blind spot of the car.',
            },
            'B': {
                'text': 'This will allow you to change lanes more quickly.',
            },
            'C': {
                'text': 'To change the lanes and do not want to turn on the indicator light signals.',
            },
            'D': {
                'text': 'To be able to see people walking in the pedestrian area',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 332,
        'text': 'Which is the correct meaning of the \'blind spot\' of the car?',
        'answers': {
            'A': {
                'text': 'The area where the driver cannot see clearly while driving',
            },
            'B': {
                'text': 'The back or the car that the rearview mirror cannot capture',
            },
            'C': {
                'text': 'The front of the car that cannot be seen by the driver',
            },
            'D': {
                'text': 'The left side of the car that cannot be seen by the driver.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 333,
        'text': 'If the engine stops while moving up a slope, what should you do first?',
        'answers': {
            'A': {
                'text': 'Immediately brake to prevent the car from moving',
            },
            'B': {
                'text': 'Change to a neutral gear',
            },
            'C': {
                'text': 'Start the engine again',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 334,
        'text': 'Drivers should not use the brakes for a long time or all the time when driving down a steep slope. Why?',
        'answers': {
            'A': {
                'text': 'Will make the brakes burn',
            },
            'B': {
                'text': 'It will take time to travel.',
            },
            'C': {
                'text': 'It will waste oil.',
            },
            'D': {
                'text': 'Will move the car slowly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 335,
        'text': 'Which of the following is the greatest benefit of using low gear while descending?',
        'answers': {
            'A': {
                'text': 'To delay the speed of the car',
            },
            'B': {
                'text': 'Reduce wear of brake pads.',
            },
            'C': {
                'text': 'Fuel saving',
            },
            'D': {
                'text': 'Increase the stability of the car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 336,
        'text': 'Which of the following is correct for driving at night?',
        'answers': {
            'A': {
                'text': 'Drive slowly and be more careful.',
            },
            'B': {
                'text': 'Turn on the high beams at all times while driving.',
            },
            'C': {
                'text': 'Drive as fast as usual.',
            },
            'D': {
                'text': 'Turn on emergency lights while driving.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 337,
        'text': 'What do you need to do first when your car breaks down?',
        'answers': {
            'A': {
                'text': 'Signals to remind other cars.',
            },
            'B': {
                'text': 'Notify the Rescue',
            },
            'C': {
                'text': 'Call the police',
            },
            'D': {
                'text': 'Notify car Insurance',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 338,
        'text': 'If you are driving on the road and it starts raining, what should you do?',
        'answers': {
            'A': {
                'text': 'Reduce the speed of the car',
            },
            'B': {
                'text': 'Speed up to get through the rain.',
            },
            'C': {
                'text': 'Turn on emergency lights and rush through the area',
            },
            'D': {
                'text': 'Stop the car immediately.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 339,
        'text': 'When driving at night, what should the drivers do?',
        'answers': {
            'A': {
                'text': 'Leave the distance between the cars ahead of normal.',
            },
            'B': {
                'text': 'Turn on emergency lights while overtaking cars in front.',
            },
            'C': {
                'text': 'Try driving near the front car in order to see way ahead.',
            },
            'D': {
                'text': 'Use high lights along the route.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 340,
        'text': 'From the situation as shown in the picture, the driver wants to drive off the car park, what must be done first?',
        'answers': {
            'A': {
                'text': 'Check the safety on the right.',
            },
            'C': {
                'text': 'Drive out of the car park immediately.',
            },
            'B': {
                'text': 'Turn on emergency light signals',
            },
            'D': {
                'text': 'Lower the windows and wave. Slow down.',
            },
        },
        'picture': '340.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 341,
        'text': 'When approaching a railway track without any barrier, which one of the following is correct?',
        'answers': {
            'A': {
                'text': 'Slow down the car and be prepared to stop',
            },
            'C': {
                'text': 'Blow the horn for safety',
            },
            'B': {
                'text': 'Speed up to get through quickly',
            },
            'D': {
                'text': 'Turn on emergency light signals',
            },
        },
        'picture': '341.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 342,
        'text': 'When driving through a "Falling rocks" warning sign, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down with more caution.',
            },
            'C': {
                'text': 'Do not do anything because the chance is rare',
            },
            'B': {
                'text': 'Speed up to get through quickly',
            },
            'D': {
                'text': 'Avoid and use other routes.',
            },
        },
        'picture': '342.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 343,
        'text': 'When smoke is seen rising from the car engine when driving, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep alert and park by the roadside',
            },
            'B': {
                'text': 'Drive down the river along the road,',
            },
            'C': {
                'text': 'Park and leave the car immediately',
            },
            'D': {
                'text': 'Notify highway rescue.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 344,
        'text': 'Which of the following causes high fuel consumption?',
        'answers': {
            'A': {
                'text': 'Excess weight',
            },
            'B': {
                'text': 'Turn on the headlights while driving.',
            },
            'C': {
                'text': 'Driving at constant speed',
            },
            'D': {
                'text': 'Normal braking adjustment.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 345,
        'text': 'Which one is correct about driving safely?',
        'answers': {
            'A': {
                'text': 'While raining, lower the speed more than usual',
            },
            'B': {
                'text': 'If drowsy, should drive at high speed in order to be awake',
            },
            'C': {
                'text': 'No need to check the vehicle before departure.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 346,
        'text': 'From the picture, if you want to overtake the car ahead, what indicator light signals should you give?',
        'answers': {
            'A': {
                'text': 'Turn on the right indicator lights and overtake when safe.',
            },
            'B': {
                'text': 'Turn on left indicator light signals while overtaking',
            },
            'C': {
                'text': 'Turn on the indicator light signals, right first and then left light signals while overtaking.',
            },
            'D': {
                'text': 'No need to turn on the light indicator signals if the car in front drives in low speed.',
            },
        },
        'picture': '346.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 347,
        'text': 'If you park the car on the left and want to move out, what should you do?',
        'answers': {
            'A': {
                'text': 'Look at the right side mirror and rear view mirror. Turn on the right indicator light. Drive when safe',
            },
            'B': {
                'text': 'Turn on the light warning signals to warn the cars behind to slow down.',
            },
            'C': {
                'text': 'No need to look at the parked car ahead. Just look at the car behind is enough.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 348,
        'text': 'What should you do when it rains heavily while you are driving at a speed limit of 60 kilometers pi hour?',
        'answers': {
            'A': {
                'text': 'Slow down',
            },
            'B': {
                'text': 'Pull off the road and wait until the rain stops.',
            },
            'C': {
                'text': 'Speedup!',
            },
            'D': {
                'text': 'Drive at the same speed',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 349,
        'text': 'Which of the following is NOT the right way to drive?',
        'answers': {
            'A': {
                'text': 'When the car behind is driving too close, you should speed up.',
            },
            'B': {
                'text': 'Be aware that the weight and speed of the car affect the distance to stop.',
            },
            'C': {
                'text': 'Safety distance of a large vehicle must be greater than safety distance of a car.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 350,
        'text': 'What should you do if you are driving behind a truck signaling a left turn but moves instead to the right?',
        'answers': {
            'A': {
                'text': 'Keep the distance and wait for the truck to move in the exact direction.',
            },
            'B': {
                'text': 'Drive closer to prepare to overtake',
            },
            'C': {
                'text': 'Understand that the driver of the truck may turn and use the incorrect indicator light.',
            },
            'D': {
                'text': 'Prepare to overtake when the truck begins to slow down.',
            },
        },
        'picture': '350.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 351,
        'text': 'From the picture, does the blue car or the green car have the right to go first?',
        'answers': {
            'A': {
                'text': 'Green car because it is in the main way.',
            },
            'B': {
                'text': 'Blue car',
            },
            'C': {
                'text': 'Either car can go first.',
            },
            'D': {
                'text': 'They have the right to go at the same time.',
            },
        },
        'picture': '351.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 352,
        'text': 'From the picture, which car must give way?',
        'answers': {
            'A': {
                'text': 'White car',
            },
            'B': {
                'text': 'Red car',
            },
            'C': {
                'text': 'Faster car',
            },
            'D': {
                'text': 'Lower speed car',
            },
        },
        'picture': '352.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 353,
        'text': 'Which of the following is an INCORRECT practice?',
        'answers': {
            'A': {
                'text': 'Overtake while the car behind tries to overtake your car.',
            },
            'B': {
                'text': 'Do not overtake if the car in front is overtaking.',
            },
            'C': {
                'text': 'Do not overtake if there is oncoming traffic at short distance.',
            },
            'D': {
                'text': 'Can overtake if the car in front turns on the left turn indicator light and slows down.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 354,
        'text': 'From the picture, if the car you are going to overtake turns on the right indicator signal, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down and wait until the car ahead turns.',
            },
            'B': {
                'text': 'Speed up your car and overtake it.',
            },
            'C': {
                'text': 'Give high light signal to indicate that you want to overtake.',
            },
            'D': {
                'text': '???',
            },
        },
        'picture': '354.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 355,
        'text': 'Which of the following relates to driving safely?',
        'answers': {
            'A': {
                'text': 'Keep a suitable distance from other vehicles so that drivers can stop their cars in time.',
            },
            'B': {
                'text': 'Overtaking the car that is approaching a curve',
            },
            'C': {
                'text': 'Overtaking on the left side of the road with two lanes when the car in front is slow.',
            },
            'D': {
                'text': 'Turn on high beams at all times while driving at night.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 356,
        'text': 'What must you do if you feel that you are driving too fast at a speed or 90 km per hour?',
        'answers': {
            'A': {
                'text': 'Slow down until you think it is safe',
            },
            'B': {
                'text': 'Drive close to 100 km per hour.',
            },
            'C': {
                'text': 'Get out of that lane',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 357,
        'text': 'When your car breaks down in the middle of the street, what should you do?',
        'answers': {
            'A': {
                'text': 'Turn on the emergency lights and park the car on the roadside.',
            },
            'B': {
                'text': 'Display the triangle warning symbol at the back of your car',
            },
            'C': {
                'text': 'Park and leave the car in the middle of the road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 358,
        'text': 'When should you use the Emergency Signals?',
        'answers': {
            'A': {
                'text': 'When your car is broken or an accident occurs.',
            },
            'B': {
                'text': 'When you drive at low speed while getting lost',
            },
            'C': {
                'text': 'When you drive at low speed due to heavy rain',
            },
            'D': {
                'text': 'When you want to drive through an intersection',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 359,
        'text': 'Which of the following situations is wrong for turning on the emergency signals?',
        'answers': {
            'A': {
                'text': 'To make other drivers understand that the car is travelling fast.',
            },
            'B': {
                'text': 'To make other drivers think that the car has had an accident.',
            },
            'C': {
                'text': 'To make other drivers confused that the car turning on emergency lights is turning left or right',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 360,
        'text': 'Stopping in which of the following conditions will require more distance than usual?',
        'answers': {
            'A': {
                'text': 'When it rains',
            },
            'B': {
                'text': 'Nighttime',
            },
            'C': {
                'text': 'While windy',
            },
            'D': {
                'text': 'Foggy',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 361,
        'text': 'What must you do if you have to park in the bus or shoulder lane at night?',
        'answers': {
            'A': {
                'text': 'Turn on the dim lights',
            },
            'B': {
                'text': 'Turn on left indicator light',
            },
            'C': {
                'text': 'Turn on the right indicator light signals',
            },
            'D': {
                'text': 'Use high beams',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 362,
        'text': 'What should you do if you are approaching a bus that is turning right to leave the bus stop?',
        'answers': {
            'A': {
                'text': 'Slow down and let the bus go first.',
            },
            'B': {
                'text': 'Do not pay attention and overtake the bus immediately',
            },
            'C': {
                'text': 'Blow the horn or flash the high beams',
            },
            'D': {
                'text': '???',
            },
        },
        'picture': '362.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 363,
        'text': 'What must you do if the left lane is obstructed and there is oncoming traffic?',
        'answers': {
            'A': {
                'text': 'Stop and wait until the oncoming car has passed then continue driving.',
            },
            'B': {
                'text': 'Drive through it without paying attention to the oncoming traffic',
            },
            'C': {
                'text': 'Turn on emergency light signals and overtake.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 364,
        'text': 'You are driving past a car parked on the side of the road but you notic football rolling out into the road, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down and prepare to stop the car.',
            },
            'B': {
                'text': 'Drive at the same speed and give high beam signals.',
            },
            'C': {
                'text': 'Drive the same speed and give the horn signals.',
            },
            'D': {
                'text': 'Park the car and wave to the boy to pick up his ball.',
            },
        },
        'picture': '364.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 365,
        'text': 'From the picture, which of the following is correct about overtaking?',
        'answers': {
            'A': {
                'text': 'The car cannot overtake the car in front.',
            },
            'B': {
                'text': 'The car behind can overtake if there is not a pedestrian crossing the road',
            },
            'C': {
                'text': 'The car behind can overtake if there is no oncoming traffic.',
            },
            'D': {
                'text': 'The car can overtake if there is no stop sign on the road edge.',
            },
        },
        'picture': '365.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 366,
        'text': 'When you drive near a parked car, what is the most appropriate action you should do?',
        'answers': {
            'A': {
                'text': 'Be more careful, always ready to stop.',
            },
            'C': {
                'text': 'Accelerate through immediately.',
            },
            'B': {
                'text': 'Continue driving without being careful.',
            },
            'D': {
                'text': 'Putting on your high beams head lights is enough',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 367,
        'text': 'When you drive through a flooded road, what should you do?',
        'answers': {
            'A': {
                'text': 'Press the brake pad to ensure the brakes dry quickly.',
            },
            'B': {
                'text': 'Stop the car and wait for brakes to dry',
            },
            'C': {
                'text': 'Stop the car. Check the tires',
            },
            'D': {
                'text': 'Drive faster to keep the brake pad dry',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 368,
        'text': 'From the picture, does the blue car or the green car have the right to go through first?',
        'answers': {
            'A': {
                'text': 'Let the green car go first.',
            },
            'B': {
                'text': 'Let the bIue car go first.',
            },
            'C': {
                'text': 'Whichever car has the higher speed.',
            },
            'D': {
                'text': 'Either car to go as long as it arrives first.',
            },
        },
        'picture': '368.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 369,
        'text': 'From the picture, if you want to turn right at the T junction, what must you do?',
        'answers': {
            'A': {
                'text': 'Let both cars on the right and left go first.',
            },
            'B': {
                'text': 'Give a way and let the cars on the right go first.',
            },
            'C': {
                'text': 'Let the car on the left go first.',
            },
            'D': {
                'text': 'Turn right away',
            },
        },
        'picture': '369.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 370,
        'text': 'You arrive at a junction with green traffic signals showing but there is a traffic jam (picture)? Wha should you do?',
        'answers': {
            'A': {
                'text': 'Wait until the car ahead is moving, then drive through.',
            },
            'B': {
                'text': 'Drive after the front car.',
            },
            'C': {
                'text': 'Try to drive to the right of the car in front.',
            },
            'D': {
                'text': 'Drive to the middle of the intersection then wait until the car in front moves.',
            },
        },
        'picture': '370.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 371,
        'text': 'Both the red and the yellow cars in the picture want to go in the same direction, which car has th right of way when the traffic signals change to green?',
        'answers': {
            'A': {
                'text': 'Red car',
            },
            'B': {
                'text': 'Yellow car',
            },
            'C': {
                'text': 'Any vehicle that arrived at the intersection first.',
            },
            'D': {
                'text': 'The vehicle with the higher speed.',
            },
        },
        'picture': '371.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 372,
        'text': 'From the picture, if there is no traffic light, does the red car or the yellow car have the right of way?',
        'answers': {
            'A': {
                'text': 'Yellow car',
            },
            'B': {
                'text': 'Red car',
            },
            'C': {
                'text': 'The car that arrives at the intersection first.',
            },
            'D': {
                'text': 'The vehicle with the higher speed',
            },
        },
        'picture': '372.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 373,
        'text': 'From the picture, if the red car and the yellow car want to turn right at the same time which car will has the right to go first?',
        'answers': {
            'A': {
                'text': 'They can go at the same time',
            },
            'D': {
                'text': 'The vehicle with the higher speed',
            },
            'B': {
                'text': 'Red car',
            },
            'C': {
                'text': 'Yellow car',
            },
        },
        'picture': '373.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 374,
        'text': 'What is the correct way of driving through a built up, busy metropolitan area?',
        'answers': {
            'A': {
                'text': 'Drive at low speed. And be careful',
            },
            'B': {
                'text': 'Drive with high speed',
            },
            'C': {
                'text': 'Drive at normal speed',
            },
            'D': {
                'text': 'Drive at normal speed but slow down if you see any warning signs',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 375,
        'text': 'What do drivers need to pay attention to when driving in a busy metropolitan area?',
        'answers': {
            'A': {
                'text': 'Billboards along roadside',
            },
            'B': {
                'text': 'The parked bus that is about to move off.',
            },
            'C': {
                'text': 'Animals on the road.',
            },
            'D': {
                'text': 'Cyclists',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 376,
        'text': 'When approaching the crossing in front of a school, what should the driver do?',
        'answers': {
            'A': {
                'text': 'rive slowly with caution.',
            },
            'B': {
                'text': 'Try to use a constant speed to pass through that area.',
            },
            'C': {
                'text': 'Drive along the left edge of the road with caution.',
            },
            'D': {
                'text': 'Use the signals to warn people in the neighborhood.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 377,
        'text': 'What should a driver do when driving near a crossing with no pedestrian crossing?',
        'answers': {
            'A': {
                'text': 'Drive slowly with caution.',
            },
            'B': {
                'text': 'Use short horn signal to warn others',
            },
            'C': {
                'text': 'Use long horn signals to warn.',
            },
            'D': {
                'text': 'Use high beam signals to warn',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 378,
        'text': 'What should you do if you are driving behind a large vehicle signaling a left turn but instead it roves gradually to the right?',
        'answers': {
            'A': {
                'text': 'Keep a safe distance.',
            },
            'B': {
                'text': 'Make horn signals',
            },
            'C': {
                'text': 'Overtake on the left',
            },
            'D': {
                'text': 'Follow the bigger vehicle very closely',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 379,
        'text': 'Which of the following is NOT recommended when navigating a roundabout?',
        'answers': {
            'A': {
                'text': 'Overtaking in and out of lanes',
            },
            'B': {
                'text': 'allowing the cars on the roundabout to pass first.',
            },
            'C': {
                'text': 'Strictly follow traffic rules.',
            },
            'D': {
                'text': 'Always turn on indicator signals before leaving the roundabout.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 380,
        'text': 'Which is a safe driving technique when travelling along a bend?',
        'answers': {
            'A': {
                'text': 'Reduce speed before curve',
            },
            'B': {
                'text': 'Use higher speed than specified.',
            },
            'C': {
                'text': 'Changing gear while entering the curve.',
            },
            'D': {
                'text': 'Press the brake pedal suddenly while in the curve',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 381,
        'text': 'From the picture, if you are driving behind a cyclist but you want to turn left, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down until the bike passes the turn',
            },
            'B': {
                'text': 'Try to overtake the bike before the turn.',
            },
            'C': {
                'text': 'Park and wait until the cyclist passes the turn.',
            },
            'D': {
                'text': '???',
            },
        },
        'picture': '381.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 382,
        'text': 'What should you be especially careful of when you find a bus parked on the opposite side of the street (on-coming traffic)?',
        'answers': {
            'A': {
                'text': 'Pedestrians may walk behind the bus.',
            },
            'B': {
                'text': 'The bus may move abruptly Bus may be broken.',
            },
            'C': {
                'text': 'No need to be careful because it is the opposite road.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 383,
        'text': 'In the picture, the blue car comes out of the alley, which car must stop and give way?',
        'answers': {
            'A': {
                'text': 'Blue car',
            },
            'B': {
                'text': 'Brown car',
            },
            'C': {
                'text': 'Any of the cars',
            },
            'D': {
                'text': 'The lower speed Car',
            },
        },
        'picture': '383.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 384,
        'text': 'Which one is INCORRECT when overtaking?',
        'answers': {
            'A': {
                'text': 'Overtaking in the \'Do not overtake\' area with caution',
            },
            'B': {
                'text': 'Do not overtake when visibility is poor',
            },
            'C': {
                'text': 'Estimate time required to overtake successfully',
            },
            'D': {
                'text': 'Overtake when safe only',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 385,
        'text': 'When you see traffic lights change from green to yellow while you are driving through a junction where traffic is not crowded, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down and stop',
            },
            'C': {
                'text': 'Continue driving at higher speeds.',
            },
            'B': {
                'text': 'Continue driving at constant speed',
            },
            'D': {
                'text': 'Slow down and drive away',
            },
        },
        'picture': '385.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 386,
        'text': 'While waiting for the lights signal at the crossroads then the traffic light turns green, what should you do?',
        'answers': {
            'A': {
                'text': 'Check traffic around first, move off when safe to do so',
            },
            'B': {
                'text': 'Drive through the intersection without delay so not wasting time for the car behind',
            },
            'C': {
                'text': 'Wait until the car behind gives the horn signal and then move off',
            },
            'D': {
                'text': '???',
            },
        },
        'picture': '386.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 387,
        'text': 'What should you do if you are the driver in the red car below?',
        'answers': {
            'A': {
                'text': 'Look in the side mirror, give the right indicator signals. Change lanes when safe.',
            },
            'B': {
                'text': 'Accelerate and overtake without looking at the side mirror.',
            },
            'C': {
                'text': 'Speed forward and hurry to change traffic lanes.',
            },
            'D': {
                'text': 'Use the emergency light signals and change lanes when safe.',
            },
        },
        'picture': '387.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 388,
        'text': 'Which is the correct practice of driving safely?',
        'answers': {
            'A': {
                'text': 'Check the readiness of the car before departure.',
            },
            'B': {
                'text': 'No need to give indicator signals when changing lanes',
            },
            'C': {
                'text': 'In making a U-turn, no indicator light signals are required.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 389,
        'text': 'Which is the correct way to drive around a bend in the road?',
        'answers': {
            'A': {
                'text': 'Reduce speed before curve, speed up when out of curve',
            },
            'B': {
                'text': 'Speed up before the curve. Slow down while out of the curve.',
            },
            'C': {
                'text': 'Slow down before curve. Slow down while leaving the curve.',
            },
            'D': {
                'text': 'Speed up before the curve. Speed up when coming out of the curve.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 390,
        'text': 'What should you do while driving a car during heavy rain?',
        'answers': {
            'A': {
                'text': 'Turn on the front lights',
            },
            'B': {
                'text': 'Turn on emergency lights',
            },
            'C': {
                'text': 'Drive slowly without turning on the lights.',
            },
            'D': {
                'text': 'Sound the horn and drive to prevent the car behind from hitting your car',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 391,
        'text': 'What should you do when driving if you get a flat tire or have a tire explosion?',
        'answers': {
            'A': {
                'text': 'Hold the steering wheel firmly, then slowly brake and take the car to the side of the road.',
            },
            'B': {
                'text': 'Press the clutch quickly followed by the brakes.',
            },
            'C': {
                'text': 'Hold the steering wheel firmly. Brake pedal fast.',
            },
            'D': {
                'text': 'Hold the steering wheel firmly and press the clutch pedal only.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 392,
        'text': 'What should you do if the accelerator is stuck?',
        'answers': {
            'A': {
                'text': 'Stay alert and focus and use foot tip to remove the accelerator',
            },
            'B': {
                'text': 'Turn on hazard light',
            },
            'C': {
                'text': 'Pull hand brake',
            },
            'D': {
                'text': 'Repeat the accelerator several times',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 393,
        'text': 'Which one is NOT the aim of driving safely?',
        'answers': {
            'A': {
                'text': 'Drive as fast as you can to reach the destination',
            },
            'B': {
                'text': 'Do not drive to hit another car',
            },
            'C': {
                'text': 'Do not cause other cars to collide.',
            },
            'D': {
                'text': 'Prevent other cars from hitting us.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 394,
        'text': 'Why shouldn\'t you turn on the lights while driving behind another car or when there is oncoming traffic?',
        'answers': {
            'A': {
                'text': 'The driver of the car ahead and the oncoming traffic will not be able to see the road clearly.',
            },
            'B': {
                'text': 'It will make the driver of the front car and the oncoming car doze off',
            },
            'C': {
                'text': 'It will make us see the road unclearly.',
            },
            'D': {
                'text': 'Will cause the oncoming car driver to doze off.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 395,
        'text': 'When driving long distances and you feel sleepy, what should you do?',
        'answers': {
            'A': {
                'text': 'Take a rest, sleep or exercise at the rest areas',
            },
            'B': {
                'text': 'Move and brake often to get rid sleepiness',
            },
            'C': {
                'text': 'Drive with music to keep the nervous system awaken.',
            },
            'D': {
                'text': 'Speed up to reach the destination quickly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 396,
        'text': 'Which one is not the way to drive a car safely while raining?',
        'answers': {
            'A': {
                'text': 'Turn on emergency light at all times when it rains.',
            },
            'B': {
                'text': 'Leave a long distance from the car in front.',
            },
            'C': {
                'text': 'Turn on the headlights.',
            },
            'D': {
                'text': 'Use a safe speed.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 397,
        'text': 'What should you do when approaching a railway crossing with no barrier after the car in front has gone across?',
        'answers': {
            'A': {
                'text': 'Befоге crossing the railroad, it is necessary to check the safety again.',
            },
            'B': {
                'text': 'Drive after the front car right away',
            },
            'C': {
                'text': 'Stop and wait for the traffic officer to give you a signal to proceed.',
            },
            'D': {
                'text': 'Wait for the green light signal.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 398,
        'text': 'When you drive a car with a heavy load, which one is correct?',
        'answers': {
            'A': {
                'text': 'Your vehicle will have a longer braking distance.',
            },
            'B': {
                'text': 'Your vehicle suspension is smoothe',
            },
            'C': {
                'text': 'Your vehicle will have more exhaust fumes',
            },
            'D': {
                'text': 'Your engine will run at full capacity',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 399,
        'text': 'What can happen if you drive a truck which has a load that includes a tall vertical object?',
        'answers': {
            'A': {
                'text': 'The center of gravity is higher, making it easier to overturn.',
            },
            'B': {
                'text': 'The centrifugal force of the vehicle and the goods will be less.',
            },
            'C': {
                'text': 'The centrifugal force of the car will be less due to the load.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 400,
        'text': 'What do worn out or expired tires look like?',
        'answers': {
            'A': {
                'text': 'Cracks along the tires',
            },
            'B': {
                'text': 'The tires will be completely black.',
            },
            'C': {
                'text': 'The tire will be white.',
            },
            'D': {
                'text': '???',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 401,
        'text': 'What should we do first when preparing to overtake another vehicle?',
        'answers': {
            'A': {
                'text': 'Look at the side mirror and look give the light indicator signal to overtake.',
            },
            'B': {
                'text': 'When the oncoming traffic allows overtake',
            },
            'C': {
                'text': 'Speed up and overtake right away',
            },
            'D': {
                'text': 'Turn on emergency light signals and overtake.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 402,
        'text': 'What should you do when you drive a car through smoke or rain?',
        'answers': {
            'A': {
                'text': 'Turn on the front lights',
            },
            'B': {
                'text': 'Turn on the dim lights',
            },
            'C': {
                'text': 'Drive slowly without turning on the lights.',
            },
            'D': {
                'text': 'Blow the horn and drive to prevent the car behind hitting you.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 403,
        'text': 'After driving through the water when the car is dry, what should we do first?',
        'answers': {
            'A': {
                'text': 'Test the brakes several times.',
            },
            'B': {
                'text': 'Test the indicator signal several times.',
            },
            'C': {
                'text': 'Test the horn signals',
            },
            'D': {
                'text': 'Test low and high beam lights.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 404,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'Stop for pedestrian crossing',
            },
            'B': {
                'text': 'Make calls while driving',
            },
            'C': {
                'text': 'Stop or park the car in the middle of the road.',
            },
            'D': {
                'text': 'Overtaking on the in the \'Do not overtake\' zone.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 405,
        'text': 'Which of the following should a driver NOT do when driving through the rain?',
        'answers': {
            'A': {
                'text': 'Turn on the emergency lights throughout the route.',
            },
            'B': {
                'text': 'Turn on the wipers',
            },
            'C': {
                'text': 'Use more caution.',
            },
            'D': {
                'text': 'Slow down more than usual.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 406,
        'text': 'What should you do when your vehicle breaks down?',
        'answers': {
            'A': {
                'text': 'Bring the car to the side, turn on the hazard lights',
            },
            'B': {
                'text': 'Park the car and leave it in the middle of the road.',
            },
            'C': {
                'text': 'Cover back of the car with leaves and branches, to warn other road users.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 407,
        'text': 'Which of the following color signal warning lights on any dashboard should not appear while driving?',
        'answers': {
            'A': {
                'text': 'Red',
            },
            'B': {
                'text': 'Green',
            },
            'C': {
                'text': 'Yellow',
            },
            'D': {
                'text': 'Blue',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 408,
        'text': 'How should you position your hands correctly on a steering wheel?',
        'answers': {
            'A': {
                'text': 'All five fingers grip the steering wheel so that it can rotate smoothly.',
            },
            'B': {
                'text': 'All five fingers grip the steering wheel as tight as possible.',
            },
            'C': {
                'text': 'Five fingers touch the steering wheel. Steering with one hand',
            },
            'D': {
                'text': 'Use just 2 fingers, the thumb and the pointing finger, to hold the steering wheel.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 409,
        'text': 'When losing control on a wet road, what should you do?',
        'answers': {
            'A': {
                'text': 'Lift the foot from the accelerator pedal, hold the steering wheel firmly to control the car.',
            },
            'B': {
                'text': 'Press the brake pedal then slowly press the accelerator.',
            },
            'C': {
                'text': 'Release the accelerator pedal to use low gear.',
            },
            'D': {
                'text': 'Be conscious. Hold steering wheel firmly. Speed up',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 410,
        'text': 'While driving up a steep slope and the engine stops, what should you do?',
        'answers': {
            'A': {
                'text': 'Press the brakes, use hand brake, change to neutral gear and start the engine again.',
            },
            'B': {
                'text': 'Press the brake pedal, pull hand brake and start the engine again',
            },
            'C': {
                'text': 'Change to low gear, pull the hand brake and start again.',
            },
            'D': {
                'text': 'Let the car move and control the car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 411,
        'text': 'If the windshield cracks whilst you are driving, what should you do?',
        'answers': {
            'A': {
                'text': 'Keep calm, slow down, park the car at roadside, turn on the emergency lights',
            },
            'B': {
                'text': 'Turn on emergency lights and continue driving.',
            },
            'C': {
                'text': 'Keep calm, turn on emergency lights and stop the car immediately.',
            },
            'D': {
                'text': 'Be calm and aware and park the car along the road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 412,
        'text': 'To ensure safety during the rainy season, what accessories should be checked first?',
        'answers': {
            'A': {
                'text': 'Wipers',
            },
            'B': {
                'text': 'Water in the radiator',
            },
            'C': {
                'text': 'Distilled water',
            },
            'D': {
                'text': 'Check the car windows and doors.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 413,
        'text': 'Which of the following situations is the WRONG time to turn the headlights on?',
        'answers': {
            'A': {
                'text': 'When rushing to work.',
            },
            'B': {
                'text': 'When the visibility of road ahead is less than 150 meters?',
            },
            'C': {
                'text': 'When it rains',
            },
            'D': {
                'text': 'When there is smoke covering the road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 414,
        'text': 'While driving, there is a burning smell and the air-con is not cool, the engine does not accelerate, л/hat should you do?',
        'answers': {
            'A': {
                'text': 'Park in a safe place and call the technician to check.',
            },
            'B': {
                'text': 'Continue to drive',
            },
            'C': {
                'text': 'Slow down and continue driving.',
            },
            'D': {
                'text': 'Stop the car immediately in the middle of the road, do not move.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 415,
        'text': 'What happens when you turn the steering wheel whilst parked?',
        'answers': {
            'A': {
                'text': 'Tires wear faster than usual',
            },
            'B': {
                'text': 'It make steering easier.',
            },
            'C': {
                'text': 'The power steering will consume more oil.',
            },
            'D': {
                'text': 'Fuel consumption will be affected',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 416,
        'text': 'What should the driver do when the car comes to a sudden stop without ABS brakes?',
        'answers': {
            'A': {
                'text': 'Release brake pedal alternately, (Press repeatedly)',
            },
            'B': {
                'text': 'Press the brake pedal with force and without releasing.',
            },
            'C': {
                'text': 'Press clutch pedal first, then brake pedal.',
            },
            'D': {
                'text': 'Press the brake pedal and clutch simultaneously',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 417,
        'text': 'If the car is being driven at high speed and then the driver brakes suddenly (car does not use ABS Hakes), what will the effect be?',
        'answers': {
            'A': {
                'text': 'The wheel will lock and the car will rotate.',
            },
            'B': {
                'text': 'The car will slowly slow down.',
            },
            'C': {
                'text': 'The car will stop in the expected way and by the defined distance.',
            },
            'D': {
                'text': 'The wheel will lock and the car will stop immediately.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 418,
        'text': 'How will a flat tire impact on the driving of the car?',
        'answers': {
            'A': {
                'text': 'The steering wheel is heavy, the car is tilted.',
            },
            'B': {
                'text': 'The steering wheel is weightless.',
            },
            'C': {
                'text': 'The car will stop suddenly',
            },
            'D': {
                'text': 'Brakes will not work.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 419,
        'text': 'If you experience a flat or exploded tire whilst driving, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep calm, control steering wheel, slow down, and do not press the brakes suddenly.',
            },
            'B': {
                'text': 'Hurry to brake as fast as possible.',
            },
            'C': {
                'text': 'Move the steering wheel quickly to the side.',
            },
            'D': {
                'text': 'Release the gear and then press the brake pedal.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 420,
        'text': 'What should a driver do when the car hood/bonnet opens while driving?',
        'answers': {
            'A': {
                'text': 'Slow down and park at roadside to close the hood.',
            },
            'B': {
                'text': 'Pull over immediately to close the bonnet properly.',
            },
            'C': {
                'text': 'Brake suddenly',
            },
            'D': {
                'text': 'Press on the accelerator pedal so that the bonnet can be closed.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 421,
        'text': 'What will happen if the driver\'s seat is too far from the steering wheel?',
        'answers': {
            'A': {
                'text': 'It will be difficult to control the steering wheel, and difficult to reach other functions in the car',
            },
            'B': {
                'text': 'There will be easier gear shifting',
            },
            'C': {
                'text': 'The driver will find it easier to brake.',
            },
            'D': {
                'text': 'The visibility of the driver will be very good and they will be able to make good decisions.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 422,
        'text': 'How do you check if your car seat belt is working properly?',
        'answers': {
            'A': {
                'text': 'Pull the belt quickly, seat belt will lock.',
            },
            'B': {
                'text': 'Inspect the belt to see if it is new or not.',
            },
            'C': {
                'text': 'See if the belt has been made by a reputable brand.',
            },
            'D': {
                'text': 'Check to see if the belt is of a dark color.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 423,
        'text': 'If the vehicle is slipping and losing control, what should you do?',
        'answers': {
            'A': {
                'text': 'Reduce speed and hold the steering wheel firmly',
            },
            'B': {
                'text': 'Quickly change to low gear to slow down.',
            },
            'C': {
                'text': 'Slowly step on the clutch pedal',
            },
            'D': {
                'text': 'Steer the vehicle to the left and right.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 424,
        'text': 'What position should the front wheels be when parking on a descending steep hill?',
        'answers': {
            'A': {
                'text': 'Turned to road edge',
            },
            'B': {
                'text': 'The wheels can be in any direction',
            },
            'C': {
                'text': 'Straight and parallel with the road edge or foot path.',
            },
            'D': {
                'text': 'Turned away from the road edge.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 425,
        'text': 'What is the result of changing to the reverse gear while the car is not completely stopped?',
        'answers': {
            'A': {
                'text': 'This will cause the gears to wear faster than usual',
            },
            'B': {
                'text': 'No effect on any part of the car.',
            },
            'C': {
                'text': 'The gear oil will run out.',
            },
            'D': {
                'text': 'More oil will be consumed',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 426,
        'text': 'How slow or fast can you safely reverse your car?',
        'answers': {
            'A': {
                'text': 'Slowly reverse and be cautious',
            },
            'B': {
                'text': 'Any speed',
            },
            'C': {
                'text': 'Reverse at the same speed as moving forward',
            },
            'D': {
                'text': 'Use the speed according to the car conditi',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 427,
        'text': 'Which is the correct way to start car engine?',
        'answers': {
            'A': {
                'text': 'Pull hand brake - on neutral gear - turn off electronic equipment - press clutch pedal - start the engine.',
            },
            'B': {
                'text': 'On neutral gear - pull hand brake - start the engine.',
            },
            'C': {
                'text': 'Press the clutch pedal - start the engine.',
            },
            'D': {
                'text': 'Pull hand brake - turn off electronic equipment - start the engine.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 428,
        'text': 'What should drivers do when driving in heavy rain and bad visibility conditions?',
        'answers': {
            'A': {
                'text': 'Park where it is safe. Turn on the headlights and the emergency lights',
            },
            'B': {
                'text': 'Park the car',
            },
            'C': {
                'text': 'Turn on the headlights and accelerate through the rain.',
            },
            'D': {
                'text': 'Accelerate through the rain quickly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 429,
        'text': 'What is a safe following distance to maintain behind the vehicle in front?',
        'answers': {
            'A': {
                'text': 'At a distance to allow you to stop the car safely',
            },
            'B': {
                'text': 'Not less than 3 meters',
            },
            'C': {
                'text': 'Not less than 2 meters',
            },
            'D': {
                'text': 'Not less than 4 meters',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 430,
        'text': 'What can happen when a pedestrian is accidentally hit by a car travelling at a speed of 60 km/hour?',
        'answers': {
            'A': {
                'text': 'That person is likely to die.',
            },
            'B': {
                'text': 'That person is a little hurt.',
            },
            'C': {
                'text': 'That person will die instantly.',
            },
            'D': {
                'text': 'That person will not get hurt at all.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 431,
        'text': 'What can happen when a pedestrian is accidentally hit by a car travelling at a speed of 30 km/hour?',
        'answers': {
            'A': {
                'text': 'That person has a chance to be injured but not die.',
            },
            'B': {
                'text': 'That person will not be hurt at all',
            },
            'C': {
                'text': 'The person is likely to die.',
            },
            'D': {
                'text': 'That person will die instantly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 432,
        'text': 'What does it mean by "Recommended Speed"?',
        'answers': {
            'A': {
                'text': 'A satisfactory speed',
            },
            'B': {
                'text': 'Speed that allows you to stop in time',
            },
            'C': {
                'text': 'Speed appropriate to the road environment.',
            },
            'D': {
                'text': 'Speed limit by sign signals',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 433,
        'text': 'Which of the following is WRONG when you want to overtake a vehicle?',
        'answers': {
            'A': {
                'text': 'Overtake the car when there is a solid line in the road',
            },
            'B': {
                'text': 'Overtake large trucks when safe',
            },
            'C': {
                'text': 'Overtaking a car on the dotted line when safe.',
            },
            'D': {
                'text': 'Overtake when the car in front is turning right.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 434,
        'text': 'What is the meaning of \'blind spot\'?',
        'answers': {
            'A': {
                'text': 'Blind sport is the are that can be seen with th side mirrors',
            },
            'B': {
                'text': 'Blind sport often occurs when changing lanes or make a reverse',
            },
            'C': {
                'text': 'Blind spots are areas that cannot be seen with the mirror',
            },
            'D': {
                'text': 'Blind spot when the sight is over looked',
            },
        },
        'correctAnswerId': 'C',
    },
    {
        'id': 435,
        'text': 'If you are a novice driver, which of the following should you NOT do:',
        'answers': {
            'A': {
                'text': 'Drive too close to the car in front in order to be faster.',
            },
            'B': {
                'text': 'Avoid hanging items in the back seat of the car.',
            },
            'C': {
                'text': 'Watch the various mirrors to check for blind spots periodically.',
            },
            'D': {
                'text': 'Look at 200-300 meters ahead.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 436,
        'text': 'Which of the following will NOT help to reduce the blind spot for the driver?',
        'answers': {
            'A': {
                'text': 'Install high-performance brakes.',
            },
            'B': {
                'text': 'Sit with the right gesture',
            },
            'C': {
                'text': 'Adjust side and rear mirrors appropriately',
            },
            'D': {
                'text': 'When reversing, make sure there is nothing behind.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 437,
        'text': 'Which of the following actions should a driver NOT do when there are unexpected pedestrians on the road?',
        'answers': {
            'A': {
                'text': 'Blow the horn to chase away the pedestrians',
            },
            'B': {
                'text': 'Increase caution while driving',
            },
            'C': {
                'text': 'Stop the car for pedestrians crossing.',
            },
            'D': {
                'text': 'Slow down',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 438,
        'text': 'What is the minimum distance to keep from the side of your car to another parked car?',
        'answers': {
            'A': {
                'text': 'At least 1 meter because another car may open the door.',
            },
            'B': {
                'text': 'At least 4 meters left for the truck.',
            },
            'C': {
                'text': 'At least 2 meters for the overtaking car.',
            },
            'D': {
                'text': 'At least 3 meters leaving a space for the motorcycle to overtake',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 439,
        'text': 'When seeing a cyclist, which of the following should a driver NOT do?',
        'answers': {
            'A': {
                'text': 'Sound your horn',
            },
            'B': {
                'text': 'Take extra caution',
            },
            'C': {
                'text': 'Keep enough distance',
            },
            'D': {
                'text': 'Should observe both on the street and on the pavement.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 440,
        'text': 'Which of the following is the main cause of collisions?',
        'answers': {
            'A': {
                'text': 'Driving too close to the car in front',
            },
            'B': {
                'text': 'Low pressure tire',
            },
            'C': {
                'text': 'Traffic light signals changed suddenly.',
            },
            'D': {
                'text': 'Slow down when seeing the yellow light signals.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 441,
        'text': 'If the driver finds a road surface is in the process of being resurfaced, what should s/he do?',
        'answers': {
            'A': {
                'text': 'slow down and drive carefully',
            },
            'B': {
                'text': 'Accelerate',
            },
            'C': {
                'text': 'Turn on emergency lights. Use normal speed.',
            },
            'D': {
                'text': 'Stop the car and avoid that road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 442,
        'text': 'What should drivers NOT do while driving?',
        'answers': {
            'A': {
                'text': 'Turn on the hazard light to go straight at a crossroad.',
            },
            'B': {
                'text': 'Use signal lights when turn or change la nt',
            },
            'C': {
                'text': 'Do not tailgate',
            },
            'D': {
                'text': 'Do not overtake too closely to another car',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 443,
        'text': 'Which one is the best meaning of the word "Safe speed"?',
        'answers': {
            'A': {
                'text': 'The speed that is appropriate to the road conditions, weather, traffic conditions which is not harmfi to others.',
            },
            'B': {
                'text': 'The speed laid down by law',
            },
            'C': {
                'text': 'Speed that motorists think safe.',
            },
            'D': {
                'text': 'As fast as possible',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 444,
        'text': 'When driving in areas where visibility is bad, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down, do not brake suddenly.',
            },
            'B': {
                'text': 'Turn on the high beams all the way.',
            },
            'C': {
                'text': 'Sound the horn even when it\'s not sure if there is an obstacle ahead.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 445,
        'text': 'Which of the following is NOT the result of speeding?',
        'answers': {
            'A': {
                'text': 'You are able to stop immediately.',
            },
            'B': {
                'text': 'Extra power consumption',
            },
            'C': {
                'text': 'Severity of the injury if more accidents.',
            },
            'D': {
                'text': 'High chance of accident',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 446,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'If there is a car driving unusually, slow down, keep the distance, do not get too close or overtake at short range.',
            },
            'B': {
                'text': 'At the intersection during the night, If there is no car, you should speed up to pass the intersection not to waste time',
            },
            'C': {
                'text': 'If you suspect that the car in front is a drunk driver, you should quickly try to overtake.',
            },
            'D': {
                'text': 'Drive too close to the car in front.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 447,
        'text': 'Driving through a junction, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down then look left and right',
            },
            'B': {
                'text': 'Speed up and blow the horn',
            },
            'C': {
                'text': 'Turn on emergency lights',
            },
            'D': {
                'text': 'Wave asking others to give way',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 448,
        'text': 'If you see another car giving the signal to turn or change lane, what must be done?',
        'answers': {
            'A': {
                'text': 'Slow down and give way',
            },
            'B': {
                'text': 'Speed up to go first',
            },
            'C': {
                'text': 'Stop the car',
            },
            'D': {
                'text': 'Park thee',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 449,
        'text': 'Which of the following is wrong?',
        'answers': {
            'A': {
                'text': 'Accelerate while another car is overtaking yours.',
            },
            'B': {
                'text': 'Do not overtake if the car in front is overtakii',
            },
            'C': {
                'text': 'Overtake when the car in front indicates left and is slowing down',
            },
            'D': {
                'text': 'Don\'t overtake if there is oncoming traffic at short distance',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 450,
        'text': 'Which of the following is correct practice when overtaking a car moving at a similar speed to yourself?',
        'answers': {
            'A': {
                'text': 'Use more distance and time to overtake.',
            },
            'B': {
                'text': 'Use more distances, time to overtake is the same',
            },
            'C': {
                'text': 'Use the same distance but more time to overtake.',
            },
            'D': {
                'text': 'Use less distance and time to overtake.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 451,
        'text': 'When you see a bus turn on the \'turn right\' indicators to leave the bus stop, what should you do',
        'answers': {
            'A': {
                'text': 'Slow down and let the bus go first.',
            },
            'B': {
                'text': 'Do not pay attention and drive past the bus immediately.',
            },
            'C': {
                'text': 'Blow the horn or flash your high beams.',
            },
            'D': {
                'text': 'Turn on emergency lights to tell the bus to go first.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 453,
        'text': 'What should you do when the car in front stops at an intersection with no traffic lights and the road is clear?',
        'answers': {
            'A': {
                'text': 'Do not overtake.',
            },
            'B': {
                'text': 'Slow down and overtake',
            },
            'C': {
                'text': 'Blow the horn to make the car ahead move',
            },
            'D': {
                'text': 'Overtake immediately',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 454,
        'text': 'While you\'re stopping for the signals at the intersection and then the traffic light turns to green, what should you do?',
        'answers': {
            'A': {
                'text': 'Check traffic around before moving off',
            },
            'B': {
                'text': 'Drive through the intersection quickly.',
            },
            'C': {
                'text': 'Wait until the car behind you gives the horn signals and then move.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 455,
        'text': 'What should drivers do before overtaking another vehicle?',
        'answers': {
            'A': {
                'text': 'Check the mirrors first both sides and back to check for blind spots.',
            },
            'B': {
                'text': 'Give light signals first.',
            },
            'C': {
                'text': 'Turn on emergency light signals and overtake.',
            },
            'D': {
                'text': 'Speed up and overtake right away',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 456,
        'text': 'What must you do when you hear the siren signals of an ambulance?',
        'answers': {
            'A': {
                'text': 'Give way to the emergency vehicle to pass first',
            },
            'B': {
                'text': 'Use horn signals to alert other drivers.',
            },
            'C': {
                'text': 'Flash the high beams to warn other drivers.',
            },
            'D': {
                'text': 'Pretend not to hear.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 457,
        'text': 'What should the drivers do when seeing a person with disabilities trying to cross the road?',
        'answers': {
            'A': {
                'text': 'Stop and wait for the disabled person to cross first',
            },
            'B': {
                'text': 'Slow down and flash the high beams to the disabled person',
            },
            'C': {
                'text': 'Accelerate and drive around to the right of the disabled.',
            },
            'D': {
                'text': 'Stop and keep signaling until the disabled person has crossed.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 458,
        'text': 'Which one is NOT the cause of an accident?',
        'answers': {
            'A': {
                'text': 'Slowing down when being overtaken',
            },
            'B': {
                'text': 'Driving too close to the car in front',
            },
            'C': {
                'text': 'Driving faster than speed limit.',
            },
            'D': {
                'text': 'Overtake in the \'Do Not Overtake\' zone',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 459,
        'text': 'If you see big animals like cows walking on the street, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down and/or stop to let the animals pass first.',
            },
            'B': {
                'text': 'BIowthehorn',
            },
            'C': {
                'text': 'Speed up to overtake right away',
            },
            'D': {
                'text': 'Flash the high beams',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 460,
        'text': 'Which is the WRONG way to overtake?',
        'answers': {
            'A': {
                'text': 'Overtaking in the area of the solid lines.',
            },
            'B': {
                'text': 'Overtake when safe to do so',
            },
            'C': {
                'text': 'Estimate the time it takes to overtake correctly.',
            },
            'D': {
                'text': 'Not overtaking when the road has poor visibility',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 461,
        'text': 'What should the driver do if s/he needs to drive on a road that has a damaged surface?',
        'answers': {
            'A': {
                'text': 'High speed driving',
            },
            'B': {
                'text': 'Drive carefully',
            },
            'C': {
                'text': 'Use low speed',
            },
            'D': {
                'text': 'Do not brake suddenly while driving in on damaged road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 462,
        'text': 'When driving near a crossing but there is NO pedestrian crossing, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slow down and observe left and right for safety.',
            },
            'B': {
                'text': 'Use high beam signals as a warning',
            },
            'C': {
                'text': 'Use short horn signal sounds to warn.',
            },
            'D': {
                'text': 'Use long horn signals to warn',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 463,
        'text': 'What kind of visibility condition requires special care and require drivers to keep a safe distance behind another vehicle?',
        'answers': {
            'A': {
                'text': 'Raining with fog, slippery road.',
            },
            'B': {
                'text': 'At night, there is enough light.',
            },
            'C': {
                'text': 'Traffic is flowing',
            },
            'D': {
                'text': 'No rain in the daytime',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 464,
        'text': 'To prevent road accidents, what should a driver NOT do?',
        'answers': {
            'A': {
                'text': 'Talk on the phone while driving',
            },
            'B': {
                'text': 'Keep adequate distance between themselves and the car in fro',
            },
            'C': {
                'text': 'Control their speed',
            },
            'D': {
                'text': 'Check and respond to dangerous things.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 465,
        'text': 'Which of the following is the safest action before moving your car from the left hand shoulder of the road?',
        'answers': {
            'A': {
                'text': 'Look at the right side mirror. Turn on the right indicator light and look back before driving further.',
            },
            'B': {
                'text': 'Turn on left indicator light signals, turn your head to the left.',
            },
            'C': {
                'text': 'Look in the rearview mirro',
            },
            'D': {
                'text': 'Look in the right side mirror.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 466,
        'text': 'What should be the correct speed to use before driving around a bend or turning a corner?',
        'answers': {
            'A': {
                'text': 'Control the speed of the car to suit the curve or turn angle.',
            },
            'B': {
                'text': 'Slow down as much as possible.',
            },
            'C': {
                'text': 'Speed up more.',
            },
            'D': {
                'text': 'Use constant speed.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 467,
        'text': 'To be aware of the various dangers around the car while driving, which of the following must N01 be practiced?',
        'answers': {
            'A': {
                'text': 'Looking at the billboards along the way.',
            },
            'B': {
                'text': 'Looking in the mirror periodically.',
            },
            'C': {
                'text': 'Checking the blind spot of the car periodically.',
            },
            'D': {
                'text': 'Looking ahead to a distance of 200-300 meters.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 468,
        'text': 'Other than movement of other cars, which of the safety forecasting techniques road users should also exercise?',
        'answers': {
            'A': {
                'text': 'Anticipate movement of other pedestrians',
            },
            'B': {
                'text': 'Anticipate possibility of an accident to self',
            },
            'C': {
                'text': 'Anticipate own turning direction',
            },
            'D': {
                'text': 'Anticipate own driving behavior',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 469,
        'text': 'What is the impact of also paying attention to surroundings on the road and roadsides?',
        'answers': {
            'A': {
                'text': 'Reduce risk of accidents',
            },
            'B': {
                'text': 'Increase accidents',
            },
            'C': {
                'text': 'Traffic congestion',
            },
            'D': {
                'text': 'Inconvenience',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 470,
        'text': 'Road accident caused by overtaking is likely to result in which type of accident?',
        'answers': {
            'A': {
                'text': 'Collision',
            },
            'B': {
                'text': 'Crash from side',
            },
            'C': {
                'text': 'An accident involves a pedestrian',
            },
            'D': {
                'text': 'Hitting the roadsic footpath',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 471,
        'text': 'Why does speeding off immediately after the green traffic light very dangerous?',
        'answers': {
            'A': {
                'text': 'You may collide with a carthat runs the red light signals from another way.',
            },
            'B': {
                'text': 'The car in front of you may be broken down',
            },
            'C': {
                'text': 'This may cause a traffic congestion',
            },
            'D': {
                'text': 'There may be garland seller (specific to Thai context) in the middle of the road',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 472,
        'text': 'Which of the following is the CORRECT rule to follow to ensure safe driving?',
        'answers': {
            'A': {
                'text': 'Safety must be a first consideration in any situation',
            },
            'B': {
                'text': 'Safe first for yourself without thinking about other cars on the road.',
            },
            'C': {
                'text': 'No need to think. When accident occurs, then we will be able to solve the problem immediately.',
            },
            'D': {
                'text': 'Drive as usual because our car already has good accident prevention.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 473,
        'text': 'If we anticipate an accident may occur when driving, how should we prepare?',
        'answers': {
            'A': {
                'text': 'Slowdown',
            },
            'B': {
                'text': 'Park the car immediately',
            },
            'C': {
                'text': 'Drive as usual',
            },
            'D': {
                'text': 'Drive faster',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 475,
        'text': 'How could slow down and immediate stop help preventing road accident?',
        'answers': {
            'A': {
                'text': 'Prevent risk of a pedestrian cutting in front of you',
            },
            'B': {
                'text': 'Prevent the oncoming traffic',
            },
            'C': {
                'text': 'Prevent motorcycles\' cutting off',
            },
            'D': {
                'text': 'Prevent overtaking',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 476,
        'text': 'Which should you NOT do if an accident occurs?',
        'answers': {
            'A': {
                'text': 'Stay in the car, if there are no witness and no one notices, continue.',
            },
            'B': {
                'text': 'Slow down and provide basic assistance.',
            },
            'C': {
                'text': 'Call ambulance hotline',
            },
            'D': {
                'text': 'Park the car on the roadside and give the caution signs.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 477,
        'text': 'What might be the cause if you spot the car in front swaying haphazardly from side to side?',
        'answers': {
            'A': {
                'text': 'Driver may be drunk',
            },
            'B': {
                'text': 'Nothing. This is normal driving',
            },
            'C': {
                'text': 'The driver is stopping the car.',
            },
            'D': {
                'text': 'The driver may be changing lanes.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 478,
        'text': 'What should a driver do If a motorcycle overtakes while there is oncoming traffic?',
        'answers': {
            'A': {
                'text': 'Slow down to the left and allow the overtaking',
            },
            'B': {
                'text': 'Hurry to change lanes.',
            },
            'C': {
                'text': 'Blow the horn and give the flashing signals to the oncoming traffic.',
            },
            'D': {
                'text': 'Park the car immediately',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 479,
        'text': 'Which is the best way to prevent accidents from happening when someone is crossing the street?',
        'answers': {
            'A': {
                'text': 'Slow down',
            },
            'B': {
                'text': 'Park the car immediately',
            },
            'C': {
                'text': 'Drive as usual',
            },
            'D': {
                'text': 'Speed up',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 480,
        'text': 'Which directions do drivers need to be cautious while driving?',
        'answers': {
            'A': {
                'text': 'Front, rear, left, right',
            },
            'B': {
                'text': 'At the side',
            },
            'C': {
                'text': 'Safety',
            },
            'D': {
                'text': 'Driving behavior',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 481,
        'text': 'Situations with high risks of accidents can occur even with careful driving and anticipation. Which af the following presents the highest risk?',
        'answers': {
            'A': {
                'text': 'When at a three-way junction, you blow the horn and speed ahead to turn first',
            },
            'B': {
                'text': 'When a car is parked in the middle of the road and someone opens the door to fix the car. Prevent by giving the signals and slow down.',
            },
            'C': {
                'text': 'Taxi may stop unexpectedly. Prevent by ensuring an appropriate distance between yourself and the taxi',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 482,
        'text': 'How does alcohol affect drivers?',
        'answers': {
            'A': {
                'text': 'SIow response reactions',
            },
            'B': {
                'text': 'Help to increase drivers interactions with their surroundings.',
            },
            'C': {
                'text': 'It makes drivers be more aware of the situation.',
            },
            'D': {
                'text': 'Increases the reaction time to an event.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 483,
        'text': 'Why do motorists and cyclists need to pay special attention when they arrive at the intersection?',
        'answers': {
            'A': {
                'text': 'Because bicycles and motorcycles are hard to see because of their small size.',
            },
            'B': {
                'text': 'Because bicycles and motorcycles may slow down for you to turn first',
            },
            'C': {
                'text': 'Bicycles and motorcycles may need to turn to sideways.',
            },
            'D': {
                'text': 'Bicycles and motorcycles may not see that you want to turn.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 484,
        'text': 'Why should you watch out for oncoming motorcycles as you wait to move your car from the roadside?',
        'answers': {
            'A': {
                'text': 'Motorcycles are small and not easy to notice',
            },
            'B': {
                'text': 'Because motorcycles are allowed to run on the rig',
            },
            'C': {
                'text': 'Because traffic police often use motorcycles as vehicles.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 485,
        'text': 'When there are yellow lights flashing under the warning sign that shows you are approaching the school area, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down until you are sure the children have crossed the road and then continue.',
            },
            'B': {
                'text': 'Maintain original speed and give the horn signals.',
            },
            'C': {
                'text': 'Accelerate through the crossing as fast as you can.',
            },
            'D': {
                'text': 'Stop and wait for the light signals to turn green.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 486,
        'text': 'If you know the driver in front is an elderly person, what should you do?',
        'answers': {
            'A': {
                'text': 'Always keep in mind that older drivers may react slowly.',
            },
            'B': {
                'text': 'Drive behind too close',
            },
            'C': {
                'text': 'Give signals such as flashing your headlights and overtake.',
            },
            'D': {
                'text': 'Expect that the elderly person may be driving poorly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 487,
        'text': 'If you see a car parked on the side of the road with the emergency signals flashing, what could tl mean?',
        'answers': {
            'A': {
                'text': 'Car accident or car breakdown',
            },
            'B': {
                'text': 'The car is about to park',
            },
            'C': {
                'text': 'Official vehicle',
            },
            'D': {
                'text': 'The car is moving',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 488,
        'text': 'You should not try to overtake a bicycle in what kind of circumstances?',
        'answers': {
            'A': {
                'text': 'While turning left',
            },
            'B': {
                'text': 'While driving straight ahead on the road',
            },
            'C': {
                'text': 'While driving on one-way lane',
            },
            'D': {
                'text': 'While driving on the two-way traffic',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 489,
        'text': 'What should you do when the driver of the car ahead switches on the right indicator signal?',
        'answers': {
            'A': {
                'text': 'Keep on driving. Don\'t overtake it.',
            },
            'B': {
                'text': 'Overtake to the left if there is space',
            },
            'C': {
                'text': 'Give horn signals before overtaking.',
            },
            'D': {
                'text': 'Give flashing signals to warn the driver ahead.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 490,
        'text': 'You have finished eating at a restaurant where alcohol is served, what should you do before yot drive?',
        'answers': {
            'A': {
                'text': 'Do not drink alcoholic beverages.',
            },
            'B': {
                'text': 'Ensure that you drink an energy beverages with any alcohi',
            },
            'C': {
                'text': 'Drink milk before drinking alcohol.',
            },
            'D': {
                'text': 'Eat hot food with alcohol.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 491,
        'text': 'You are driving on a long trip and feel tired, what should you do?',
        'answers': {
            'A': {
                'text': 'Take a break at the rest area and relax',
            },
            'B': {
                'text': 'Speed up and turn on the radio',
            },
            'C': {
                'text': 'Close all windows and turn on the cold air',
            },
            'D': {
                'text': 'Park the car on the shoulder and change the drive',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 492,
        'text': 'When you are sick, your ability to drive will deteriorate. You should:',
        'answers': {
            'A': {
                'text': 'Not drive after taking drugs that cause drowsiness',
            },
            'B': {
                'text': 'Take the pills with you when you drive',
            },
            'C': {
                'text': 'Reduce the drug intake',
            },
            'D': {
                'text': 'Drive as normal',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 493,
        'text': 'What is the white solid line along the road way?',
        'answers': {
            'A': {
                'text': 'Road border lines',
            },
            'B': {
                'text': 'Traffic lights ahead',
            },
            'C': {
                'text': 'Left footpath',
            },
            'D': {
                'text': 'Bicycle lane lines',
            },
        },
        'picture': '493.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 494,
        'text': 'If you are driving near a bicycle, you should',
        'answers': {
            'A': {
                'text': 'Slow down and let the bicycle turn.',
            },
            'B': {
                'text': 'Overtake on the left side of the bicycle.',
            },
            'C': {
                'text': 'Overtake before the bike reaches the crossroads.',
            },
            'D': {
                'text': 'Flash head lights so that the bicycle can see you',
            },
        },
        'picture': '494.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 495,
        'text': 'While driving behind a motorcycle that is in the center of the street as shown in the picture, what should you do?',
        'answers': {
            'A': {
                'text': 'Keep a safe distance.',
            },
            'C': {
                'text': 'Give horn signals',
            },
            'B': {
                'text': 'Flash your lights to warn the other vehicles',
            },
            'D': {
                'text': 'Press the brake pedal firmly.',
            },
        },
        'picture': '495.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 496,
        'text': 'As your car stops behind a bicycle at an intersection with traffic light signals, when the lights sign turns green, what should you do?',
        'answers': {
            'A': {
                'text': 'Give a bicycle time and stay away from it',
            },
            'B': {
                'text': 'Move the car before the bike.',
            },
            'C': {
                'text': 'Turn right but leave a distance for bicycle.',
            },
            'D': {
                'text': 'Give sound signals and then drive pass the bike.',
            },
        },
        'picture': '496.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 497,
        'text': 'You are driving along the road and a car suddenly comes from the left side, what should you do?',
        'answers': {
            'A': {
                'text': 'Give warning horn signals and be ready to stop,',
            },
            'B': {
                'text': 'Accelerate and pass as fast as you can.',
            },
            'C': {
                'text': 'Drive into the lane of the oncoming traffic.',
            },
            'D': {
                'text': 'Continue driving as you have the right in that lane.',
            },
        },
        'picture': '497.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 498,
        'text': 'You are driving on a multi-lane highway and see the signals above the lane as shown in the picture, what does this sign mean?',
        'answers': {
            'A': {
                'text': '2 left traffic lanes open',
            },
            'C': {
                'text': 'Traffic in the left lane must stop.',
            },
            'B': {
                'text': '2 right traffic lanes open',
            },
            'D': {
                'text': 'The traffic on the right lane must stop',
            },
        },
        'picture': '498.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 499,
        'text': 'What are the actions of the drivers that could cause the most accidents?',
        'answers': {
            'A': {
                'text': 'Cell phone while driving',
            },
            'C': {
                'text': 'Turning on the radio, listening to music',
            },
            'B': {
                'text': 'Talking to the person next to you',
            },
            'D': {
                'text': 'Singing',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 500,
        'text': 'When people are crossing the road at the crossing, what must the drivers do?',
        'answers': {
            'A': {
                'text': 'Stop for pedestrians crossing',
            },
            'B': {
                'text': 'Spit on the street',
            },
            'C': {
                'text': 'Smoke and throw cigarette butts on the street',
            },
            'D': {
                'text': 'Yell at other drivers who annoy you',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 501,
        'text': 'Which of the following messages strongly reminds you to drive safely?',
        'answers': {
            'A': {
                'text': 'Carelessness is the source of death.',
            },
            'B': {
                'text': 'Be adventurous!',
            },
            'C': {
                'text': 'Do not hate',
            },
            'D': {
                'text': 'Haunted',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 502,
        'text': 'Who are the most important person/s here that we should instill a sense of safety in regarding the use of roadsand vehicles?',
        'answers': {
            'A': {
                'text': 'Everybody',
            },
            'B': {
                'text': 'The driver only',
            },
            'C': {
                'text': 'Pedestrian only',
            },
            'D': {
                'text': 'Passengersonly',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 503,
        'text': 'Which one is NOT useful for the preparation of safety before making a trip?',
        'answers': {
            'A': {
                'text': 'Pack before departure',
            },
            'B': {
                'text': 'Study route before departure',
            },
            'C': {
                'text': 'Get body and mind ready.',
            },
            'D': {
                'text': 'Check the vehicle before departure.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 504,
        'text': 'When seeing pedestrians crossing the road, what should you do?',
        'answers': {
            'A': {
                'text': 'Stop to let the pedestrian pass first.',
            },
            'B': {
                'text': 'Blowthehorn',
            },
            'C': {
                'text': 'Drive through without stopping the car.',
            },
            'D': {
                'text': 'Guess the pedestrian decision',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 505,
        'text': 'In the event of an accident and injury, what should the driver consider first?',
        'answers': {
            'A': {
                'text': 'Helping the injured people',
            },
            'B': {
                'text': 'Check insurance',
            },
            'C': {
                'text': 'Moving the car involved in that accident',
            },
            'D': {
                'text': 'Wait for the police',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 506,
        'text': 'What can happen if a driver keeps too far a distance from the car moving in front?',
        'answers': {
            'A': {
                'text': 'Traffic jam',
            },
            'B': {
                'text': 'A reduction in accidents',
            },
            'C': {
                'text': 'Safety will improve',
            },
            'D': {
                'text': 'Better traffic.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 507,
        'text': 'Which is the correct behavior when using high beam lights?',
        'answers': {
            'A': {
                'text': 'Turn on the lights while there is no oncoming traffic',
            },
            'B': {
                'text': 'Turn on the high beams when you are in front car.',
            },
            'C': {
                'text': 'Using high beams when there is oncoming traffic',
            },
            'D': {
                'text': 'Turn on high beams while driving behind other cars.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 508,
        'text': 'Which is the correct driving etiquette in accordance to traffic rules?',
        'answers': {
            'A': {
                'text': 'Turn on the indicator light signals before changing the lanes no less than 30 meters',
            },
            'B': {
                'text': 'Drive at 150 km/h if the road is empty',
            },
            'C': {
                'text': 'Overtake the other car too closely.',
            },
            'D': {
                'text': 'Drive slowly in the right lane.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 509,
        'text': 'Which of the following is irresponsible driving practice?',
        'answers': {
            'A': {
                'text': 'Drive at high speed in busy traffic.',
            },
            'B': {
                'text': 'Drive carefully when it is raining',
            },
            'C': {
                'text': 'Strictly follow traffic rules.',
            },
            'D': {
                'text': 'Give indicator light signals when overtaking',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 510,
        'text': 'What should you do when changing road lanes?',
        'answers': {
            'A': {
                'text': 'View side mirrors. Turn on the indicator light signals and then change the lanes when safe.',
            },
            'B': {
                'text': 'Change lanes immediately at the right speed',
            },
            'C': {
                'text': 'Turn on the indicator light signals and change lane',
            },
            'D': {
                'text': 'Change lanes fast to dodge other cars.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 511,
        'text': 'Which of the following shows good parking etiquette?',
        'answers': {
            'A': {
                'text': 'Do not obstruct others and do not violate traffic rules.',
            },
            'B': {
                'text': 'Double park the car',
            },
            'C': {
                'text': 'Park over the No Parking area.',
            },
            'D': {
                'text': 'Park the car obstructing the entrance - exit',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 512,
        'text': 'Using the high beams to chase the car in front shows that the driver is lacking in which of the following?',
        'answers': {
            'A': {
                'text': 'Driving etiquette',
            },
            'B': {
                'text': 'Traffic law knowledge',
            },
            'C': {
                'text': 'Preparation before making a trip',
            },
            'D': {
                'text': 'Engine maintenance',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 513,
        'text': 'Which one is correct?',
        'answers': {
            'A': {
                'text': 'All cars must drive at the speed defined by law.',
            },
            'B': {
                'text': 'Fast cars must turn on high lights all the time to see the way.',
            },
            'C': {
                'text': 'Old cars, with low power must stay on the left.',
            },
            'D': {
                'text': 'New and expensive cars must drive on the right.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 514,
        'text': 'Which one is NOT the quality of a good driver?',
        'answers': {
            'A': {
                'text': 'Impatience',
            },
            'B': {
                'text': 'Tolerance',
            },
            'C': {
                'text': 'Forgiving others',
            },
            'D': {
                'text': 'Responsibility',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 515,
        'text': 'What are most major road accidents a result of?',
        'answers': {
            'A': {
                'text': 'Driver',
            },
            'B': {
                'text': 'Road',
            },
            'C': {
                'text': 'Environment',
            },
            'D': {
                'text': 'Vehicles',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 516,
        'text': 'What causes most accidents?',
        'answers': {
            'A': {
                'text': 'Speeding over the limit specified by law.',
            },
            'B': {
                'text': 'Overtaking in the "Do not overtake" area',
            },
            'C': {
                'text': 'Driving too close to the car in front',
            },
            'D': {
                'text': 'Driving the car in close range to other vehicles.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 517,
        'text': 'What should you do if you are driving into a roundabout that has no traffic lights?',
        'answers': {
            'A': {
                'text': 'Let the traffic on the right on the roundabout go first',
            },
            'B': {
                'text': 'Let the car on our left on the roundabout go first',
            },
            'C': {
                'text': 'Allow traffic entering the roundabout and turning left goes first',
            },
            'D': {
                'text': 'Allow traffic entering the roundabout and will go straight goes first',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 518,
        'text': 'When driving on the main road, you pass an alley with many cars waiting, what should you do?',
        'answers': {
            'A': {
                'text': 'Allow some of the cars to drive out of the alley and onto the main road',
            },
            'B': {
                'text': 'Blow the horn or give a warning signal to the car that leaves the alley before passing.',
            },
            'C': {
                'text': 'Try to be close to the car in front to prevent the cars from leaving the alley.',
            },
            'D': {
                'text': 'Drive past the alley at speed and send signals that you are going to go first.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 519,
        'text': 'Which of the following is an attitude of a safe driver?',
        'answers': {
            'A': {
                'text': 'Fully focus when driving, strictly follow traffic laws and regulations, convey good manner and skindness.',
            },
            'B': {
                'text': 'Drive slowly and laid back',
            },
            'C': {
                'text': 'Drive skillfully',
            },
            'D': {
                'text': 'Driving safely without an accident',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 520,
        'text': 'What should drivers do when they see a green light signal?',
        'answers': {
            'A': {
                'text': 'Blow their horn to speed up the car ahead',
            },
            'B': {
                'text': 'Slow down and let the car in front move first.',
            },
            'C': {
                'text': 'Slowly move the car out with enough distance away from the front.',
            },
            'D': {
                'text': 'Check the car from another intersection before entering the front intersection.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 521,
        'text': 'What should drivers do when they receive yellow light signals?',
        'answers': {
            'A': {
                'text': 'Slow down and stop behind stop lines',
            },
            'B': {
                'text': 'Blow the horn to speed up the car in front.',
            },
            'C': {
                'text': 'Change the lane to overtake in order to pass the yellow light signals.',
            },
            'D': {
                'text': 'Follow the car in front and violate the red light signals.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 522,
        'text': 'What should drivers do when they see people standing on the pavement waiting to cross at the crossing?',
        'answers': {
            'A': {
                'text': 'Tap the brake to warn the car after you that you are about to stop and stop at the crossing',
            },
            'B': {
                'text': 'Blow the horn to warn people crossing the road and speed up',
            },
            'C': {
                'text': 'Drive too close to the car in front without stopping for people to cross the road.',
            },
            'D': {
                'text': 'Overtake the car that stops for the people and pass quickly.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 523,
        'text': 'When is the correct time to give the right indicator light signal when approaching an intersectior',
        'answers': {
            'A': {
                'text': 'Keep the light indicator signal on whenever you want to turn left or right.',
            },
            'B': {
                'text': 'Use emergency light signals to drive straight.',
            },
            'C': {
                'text': 'Turn on the right indicator light signal only.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 524,
        'text': 'Who should wear seat belts when in a moving car?',
        'answers': {
            'A': {
                'text': 'Every driver and passenger',
            },
            'B': {
                'text': 'The driver and front seat passenger only.',
            },
            'C': {
                'text': 'Drivers and passengers over 12 years of age. Because they can fasten the seat belt.',
            },
            'D': {
                'text': 'Driver and passenger except for older people and children younger than 12 years.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 525,
        'text': 'Which of the following action shows bad and unsafe driving behavior?',
        'answers': {
            'A': {
                'text': 'riving too close to the car in front along with sounding your horn for no reason',
            },
            'B': {
                'text': 'Driving behind the front car and leaving proper spacing.',
            },
            'C': {
                'text': 'Open the fog lights when it rains heavily',
            },
            'D': {
                'text': 'Blowing the horn to warn the car in not to move backward to hit your car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 526,
        'text': 'Which of the following shows correct behavior and good driving etiquette?',
        'answers': {
            'A': {
                'text': 'Make U-turn at the U-turn point at all times even when it is far away.',
            },
            'B': {
                'text': 'Not the disabled but parking the car in the "For the disabled" area',
            },
            'C': {
                'text': 'Park at "P" gear and pull hand brake.',
            },
            'D': {
                'text': 'Stay on the turn left, turn right or U-turn lane when willing to go straight',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 527,
        'text': 'When driving into a town with traffic jams, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Slowly drive with caution to pedestrians and cars',
            },
            'B': {
                'text': 'Drive closely past the parked car or pedestrians.',
            },
            'C': {
                'text': 'Blow the horn to accelerate the front car and warn the pedestrian to give the way.',
            },
            'D': {
                'text': 'Drive back against the traffic jam to escape traffic.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 528,
        'text': 'What should you do if you spot pedestrians crossing the road in front of you?',
        'answers': {
            'A': {
                'text': 'Slow down and stop the car safely to allow the pedestrian crossing the road.',
            },
            'B': {
                'text': 'Blow the horn loudly and move quickly.',
            },
            'C': {
                'text': 'Try to drive through fast',
            },
            'D': {
                'text': 'Stop the car quickly to let people cross the road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 529,
        'text': 'What should you do if you spot a driver making a U-turn and merging into your lane?',
        'answers': {
            'A': {
                'text': 'Be kind, reduce speed and give way to the driver.',
            },
            'B': {
                'text': 'Be irritated. Honk the horn but stop',
            },
            'C': {
                'text': 'Accelerate to request way as disapproved signal to make a U-turn',
            },
            'D': {
                'text': 'Dodge away by overtaking to another lane.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 530,
        'text': 'How would you use your head lights when driving at night?',
        'answers': {
            'A': {
                'text': 'Turn on low lights when the car in front is parked and there is oncoming traffic',
            },
            'B': {
                'text': 'Both headlights and fog lights.',
            },
            'C': {
                'text': 'Turn on high lights at all times.',
            },
            'D': {
                'text': 'Head lights, fog lights and flashing hazard lights.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 531,
        'text': 'What should the driver do when driving through a curve at night?',
        'answers': {
            'A': {
                'text': 'Slow down before entering the curve. Flash the lights and change to low lights when there is oncoming traffic',
            },
            'B': {
                'text': 'Slow down before entering the curve then flash the lights and turn on hazard lights.',
            },
            'C': {
                'text': 'Slow down and flash the high lights.',
            },
            'D': {
                'text': 'Speed up before the curve then use low lights.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 532,
        'text': 'What should the driver do when driving pass a community, a school or crowded areas?',
        'answers': {
            'A': {
                'text': 'Slow down and use caution in driving.',
            },
            'B': {
                'text': 'Slow down, blow the horn and use caution.',
            },
            'C': {
                'text': 'Blow the horn and slow down',
            },
            'D': {
                'text': 'Blow the horn and speed up to get away.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 533,
        'text': 'Which one do you think is the worst driving behavior?',
        'answers': {
            'A': {
                'text': 'Driving close to the car in front along with sounding horn.',
            },
            'B': {
                'text': 'Use normal speed when another car flashes asking for way',
            },
            'C': {
                'text': 'Slow down to other cars overtaking.',
            },
            'D': {
                'text': 'Drive to the left or give way to the emergency vehicle.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 534,
        'text': 'Which of the following is driving WITHOUT a mindful conscience?',
        'answers': {
            'A': {
                'text': 'Driving while exhausted, sleepy, or binge drinking',
            },
            'B': {
                'text': 'Slow down and be cautious in a busy area.',
            },
            'C': {
                'text': 'When you feel drowsy, stop the car immediately.',
            },
            'D': {
                'text': 'Slow down and exercise caution when driving through community areas.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 535,
        'text': 'Which of the following actions is considered safe driving?',
        'answers': {
            'A': {
                'text': 'Be disciplined and respect traffic rules.',
            },
            'B': {
                'text': 'Talk to your girlfriend while driving.',
            },
            'C': {
                'text': 'Use mobile phone while driving.',
            },
            'D': {
                'text': 'Drink alcohol late at night to wake up early to drive',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 536,
        'text': 'What is the correct way to drive safely on a motorway?',
        'answers': {
            'A': {
                'text': 'Do not drive faster than speed limit',
            },
            'B': {
                'text': 'Drive slowly in the right lane.',
            },
            'C': {
                'text': 'Drive fast in the right lane.',
            },
            'D': {
                'text': 'Do not overtake over the left.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 537,
        'text': 'Which is the behavior that should be practiced when driving on the street?',
        'answers': {
            'A': {
                'text': 'Drive at a specified speed and follow the traffic signs.',
            },
            'B': {
                'text': 'Drive back against the flow of traffic to save fuel.',
            },
            'C': {
                'text': 'If driving in bright sunlight, raise your hand to protect against light.',
            },
            'D': {
                'text': 'Drive after a large truck to protect yourself from the oncoming traffic.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 538,
        'text': 'Which of the following actions should a driver AVOID in order to reach his destination safely?',
        'answers': {
            'A': {
                'text': 'Drive high speed to reach the destination before dark.',
            },
            'B': {
                'text': 'Drive responsibly.',
            },
            'C': {
                'text': 'Get familiar with the car to drive in case it is the car that you have never been driving before',
            },
            'D': {
                'text': 'Rest enough and do not drink.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 539,
        'text': 'Which of the following a driver should not do when other road users convey kindness and consideration on road use?',
        'answers': {
            'A': {
                'text': 'Use high beam lights to thank',
            },
            'B': {
                'text': 'Smile to say thank you',
            },
            'C': {
                'text': 'Nod to say thank you',
            },
            'D': {
                'text': 'Raise the right hand to eye brow level to the show thanks.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 540,
        'text': 'Which of the following shows a driver\'s awareness of driving safely and avoiding risky behavior?',
        'answers': {
            'A': {
                'text': 'Following traffic rules at all times without waiting for traffic police',
            },
            'B': {
                'text': 'Modifying the car headlight illumination to a level not specified by law.',
            },
            'C': {
                'text': 'Tuning the car engine to make noise over the legal limit.',
            },
            'D': {
                'text': 'Turn on emergency lights when parking at No Parking area.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 541,
        'text': 'Which of the following is BAD driving etiquette when overtaking or changing lanes?',
        'answers': {
            'A': {
                'text': 'After overtaking the vehicle in front, sharply cut away to the left',
            },
            'B': {
                'text': 'Always turning on the indicator light signals before overtaking',
            },
            'C': {
                'text': 'Overtaking with caution when the road is narrow',
            },
            'D': {
                'text': 'Not overtaking in a critical area of in the Do Not Overtake zone',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 542,
        'text': 'When the car driving behind gives overtaking signals, a good way to respond that allows overtaking is:',
        'answers': {
            'A': {
                'text': 'Turn on left indicator light signal and slow down.',
            },
            'C': {
                'text': 'Give horn signals and slow down',
            },
            'B': {
                'text': 'Use emergency light signals',
            },
            'D': {
                'text': 'Give high beam signals and slow down.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 543,
        'text': 'Which of the following should a driver NOT do?',
        'answers': {
            'A': {
                'text': 'Drive high speed in busy traffic.',
            },
            'C': {
                'text': 'Give the light signals to overtake.',
            },
            'B': {
                'text': 'Drive carefully with it is raining, slippery road',
            },
            'D': {
                'text': 'Strictly follow traffic rules.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 544,
        'text': 'Which is a good driving behavior?',
        'answers': {
            'A': {
                'text': 'Drive slowly on the left',
            },
            'C': {
                'text': 'Sound the horn to chase away the car in front',
            },
            'B': {
                'text': 'Drive slowly on the right.',
            },
            'D': {
                'text': 'Use the phone while driving.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 545,
        'text': 'Which is a good driving behavior?',
        'answers': {
            'A': {
                'text': 'Stop the car to allow pedestrians crossing',
            },
            'C': {
                'text': 'Change lanes without signals',
            },
            'B': {
                'text': 'Overtake at the foot of the bridge.',
            },
            'D': {
                'text': 'Drive back against the flow of traffic on the hard shoulder of the road.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 546,
        'text': 'Which is a BAD driving behavior?',
        'answers': {
            'A': {
                'text': 'Overtaking at a close distance',
            },
            'B': {
                'text': 'Stop the car to let pedestrian cross at the crossing',
            },
            'C': {
                'text': 'Bend your head when someone gives you way',
            },
            'D': {
                'text': 'Do not use high beams when there is oncoming traffic.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 547,
        'text': 'What could be the causes of an accident?',
        'answers': {
            'A': {
                'text': 'People, traffic, roads, environment',
            },
            'B': {
                'text': 'People',
            },
            'C': {
                'text': 'People, vehicles',
            },
            'D': {
                'text': 'People, vehicles, road',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 548,
        'text': 'Which of the following is not safe driving and is not energy saving?',
        'answers': {
            'A': {
                'text': 'Accelerating the engine before moving the car',
            },
            'B': {
                'text': 'Not running the engine while parking the',
            },
            'C': {
                'text': 'Driving at the right speed.',
            },
            'D': {
                'text': 'Not overloading the car with weight',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 549,
        'text': 'Which of the following is an important environmental factor that put driving at night at higher ri of accidents than driving during daytime?',
        'answers': {
            'A': {
                'text': 'Insufficient light and visibility while driving',
            },
            'B': {
                'text': 'The driver falls asleep while driving due to fatigue',
            },
            'C': {
                'text': 'Driver\'s physical condition and car\'s condition are not ready',
            },
            'D': {
                'text': 'Drive while being drunk.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 550,
        'text': 'Which one is wrong?',
        'answers': {
            'A': {
                'text': 'When driving after the vehicle, high lights can be turned on because there is no effect to the car in front',
            },
            'B': {
                'text': 'When there is oncoming traffic at night, use low lights.',
            },
            'C': {
                'text': 'Driving in a busy town area requires more caution.',
            },
            'D': {
                'text': 'When driving at night time you must be more careful than usual.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 551,
        'text': 'What should you do when there is a lot of traffic at the foot of the crossing bridge?',
        'answers': {
            'A': {
                'text': 'Drive to the end of the traffic jam',
            },
            'B': {
                'text': 'Blow the horn to get closer to the bridge.',
            },
            'C': {
                'text': 'Turn on the indicator light signals to overtake at the bridge.',
            },
            'D': {
                'text': 'Turn on the high beam to get closer to the bridge.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 552,
        'text': 'What should you do if your car is blocking others while parking?',
        'answers': {
            'A': {
                'text': 'Park at neutral gear without pulling hand brake',
            },
            'B': {
                'text': 'Pull the hand brake.',
            },
            'C': {
                'text': 'Park at "D" (forward) gear',
            },
            'D': {
                'text': 'Park at "R" (reverse) gear',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 553,
        'text': 'Which of the following behaviors is a courtesy that should be observed on the road?',
        'answers': {
            'A': {
                'text': 'Do not use horns to chase pedestrians.',
            },
            'B': {
                'text': 'Play loud music and open the car window.',
            },
            'C': {
                'text': 'Put waste litter on the shoulder or on the island of the road.',
            },
            'D': {
                'text': 'Throwing beverages cans out of the car while it is moving.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 554,
        'text': 'What should a car driver do when an emergency vehicle from behind turns on its siren?',
        'answers': {
            'A': {
                'text': 'Allow the emergency vehicle to pass.',
            },
            'B': {
                'text': 'Turn on the indicator light signals and continue driving.',
            },
            'C': {
                'text': 'Change lanes to the right immediately.',
            },
            'D': {
                'text': 'Turn on emergency lights and accelerate immediately.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 555,
        'text': 'Which of the following indicates the proper use of car horn?',
        'answers': {
            'A': {
                'text': 'Warn others of potential dangers from the car.',
            },
            'B': {
                'text': 'Used to speed up the car ahead to drive faster.',
            },
            'C': {
                'text': 'Chasing away pedestrians who are crossing the street.',
            },
            'D': {
                'text': 'Used to greet people',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 556,
        'text': 'From the picture, if you are approaching the crossing area, what should you do?',
        'answers': {
            'A': {
                'text': 'Slow down and prepare to stop',
            },
            'B': {
                'text': 'Drive at the same speed.',
            },
            'C': {
                'text': 'Blow the horn for people to hurry',
            },
            'D': {
                'text': 'Speed up',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 557,
        'text': 'What should a car driver do when there are pedestrians crossing the street s/he is turning into?',
        'answers': {
            'A': {
                'text': 'Wait until the pedestrians pass and then turn.',
            },
            'B': {
                'text': 'Wave and shout to speed up pedestrians.',
            },
            'C': {
                'text': 'Blow the horn to keep people away.',
            },
            'D': {
                'text': 'Drive near the pedestrians in close range.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 558,
        'text': 'What should the driver of the yellow car in the picture do in this situation?',
        'answers': {
            'A': {
                'text': 'Turn left and make a U-turn.',
            },
            'B': {
                'text': 'Use a horn signal to let another car stop for you.',
            },
            'C': {
                'text': 'Drive away immediately.',
            },
            'D': {
                'text': 'Gradually move forward',
            },
        },
        'picture': '558.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 559,
        'text': 'When you want to turn left into the alley, what should you do?',
        'answers': {
            'A': {
                'text': 'Stop and_wait for people to cross the street first,',
            },
            'B': {
                'text': 'Use horn signals to chase pedestrian',
            },
            'C': {
                'text': 'Drive closer to pedestrians in close range.',
            },
            'D': {
                'text': 'Wave to the pedestrians to hurry across the street.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 560,
        'text': 'Choose the correct way to stop the car at a crossing from the foliowin pictures.',
        'answers': {
            'A': {
                'text': 'Stop the car before reaching the crossing lines.',
            },
            'B': {
                'text': 'Stop on crossing lines',
            },
            'C': {
                'text': 'Stop over the crossing lines',
            },
            'D': {
                'text': 'Stop the car over the crossings',
            },
        },
        'picture': '560.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 561,
        'text': 'From the picture, when the yellow car wants to drive straight, what should yc do?',
        'answers': {
            'A': {
                'text': 'Stop and wait until the blocked car passes',
            },
            'B': {
                'text': 'Blow the horn continuous!',
            },
            'C': {
                'text': 'Use emergency light signals',
            },
            'D': {
                'text': 'Blow the horn and try to move off quid',
            },
        },
        'picture': '561.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 562,
        'text': 'Which one is correct about driving off the alley onto the main road?',
        'answers': {
            'A': {
                'text': 'Stop and wait for any cars in the main road and/or pedestrians first.',
            },
            'B': {
                'text': 'No need to turn on the indicator light signals',
            },
            'C': {
                'text': 'Blow the horn to get the way free from the other cars',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 563,
        'text': 'In the following picture, you want to turn right at the green traffic light but yc hear fire engine sirens on your right hand side, you should:',
        'answers': {
            'A': {
                'text': 'Wait for the fire engine to go first, then turn,',
            },
            'B': {
                'text': 'Turn right before the fire engine arrives.',
            },
            'C': {
                'text': 'Turn without paying attention to the fire engine.',
            },
            'D': {
                'text': 'Turn on the right indicator light signal to let the fire engine know you will go first.',
            },
        },
        'picture': '563.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 564,
        'text': 'In the following picture, you want to drive straight on at the green traffic light but you hear ambulance sirens on your right hand side, you should:',
        'answers': {
            'A': {
                'text': 'Stop and wait for the ambulance to go first',
            },
            'B': {
                'text': 'Hurry up so as to not block the ambulance',
            },
            'C': {
                'text': 'Use a horn signal to warn the ambulance to know you are going to go first',
            },
            'D': {
                'text': 'Drive through normally.',
            },
        },
        'picture': '564.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 565,
        'text': 'Can you park your car in the following picture?',
        'answers': {
            'A': {
                'text': 'No parking for all cases',
            },
            'B': {
                'text': 'Park if you are in the car',
            },
            'C': {
                'text': 'You can park if you turn on emergency lights',
            },
            'D': {
                'text': 'Cannot park if the car is not paid.',
            },
        },
        'picture': '565.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 566,
        'text': 'When the white car in the picture shows its turn right signal, What should the red cardo?',
        'answers': {
            'A': {
                'text': 'Slowdown',
            },
            'B': {
                'text': 'Use horn signals',
            },
            'C': {
                'text': 'Accelerate',
            },
            'D': {
                'text': 'Use high beam warning lights',
            },
        },
        'picture': '566.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 567,
        'text': 'The red car turns on the right indicator signals because there is a broken car on the left that blocks the way, what should the yellow car do?',
        'answers': {
            'A': {
                'text': 'Stop to allow the indicating car to go first.',
            },
            'B': {
                'text': 'Give the long horn signal',
            },
            'C': {
                'text': 'Drive as close as possible to the end of the front car',
            },
            'D': {
                'text': 'Park behind the broken car and turn on emergency light.',
            },
        },
        'picture': '567.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 568,
        'text': 'Which one is correct according to GOOD driving etiquette?',
        'answers': {
            'A': {
                'text': 'Keep indicator lights on every time you change lanes.',
            },
            'B': {
                'text': 'Drive too close the car in front.',
            },
            'C': {
                'text': 'Drive at high speeds and change lanes frequently.',
            },
            'D': {
                'text': 'Use horn signals to chase away people crossing the road',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 569,
        'text': 'Which of the following is BAD practice?',
        'answers': {
            'A': {
                'text': 'Speed up to race against the right overtaking car.',
            },
            'B': {
                'text': 'Give way to the overtaking car on the right.',
            },
            'C': {
                'text': 'Turn on the indicator light signals before turning the car',
            },
            'D': {
                'text': 'Do not turn on the high beams when driving with oncoming traffic at night.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 570,
        'text': 'Which of the following actions must a driver AVOID when another car is overtaking yours?',
        'answers': {
            'A': {
                'text': 'Speed up to avoid overtaking.',
            },
            'B': {
                'text': 'Stay in your own lane.',
            },
            'C': {
                'text': 'Drive at constant speed.',
            },
            'D': {
                'text': 'Slowdown',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 571,
        'text': 'Which of the following causes a loss in concentration when driving?',
        'answers': {
            'A': {
                'text': 'Phone while driving',
            },
            'B': {
                'text': 'Speculating road circumstances ahead',
            },
            'C': {
                'text': 'Washing your face before driving',
            },
            'D': {
                'text': 'Looking as far as possible at the road ahead.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 572,
        'text': 'Which of the following is the wrong way to fasten the seat belt?',
        'answers': {
            'A': {
                'text': 'Fig. 2 and 3.',
            },
            'B': {
                'text': 'Picture 2 only',
            },
            'C': {
                'text': 'Figure 3 only',
            },
            'D': {
                'text': 'Figure 1. 2. and 3.',
            },
        },
        'picture': '572.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 574,
        'text': 'Which is the WRONG action to take when your car is sinking into the water?',
        'answers': {
            'A': {
                'text': 'Collect valuable items and wait for help.',
            },
            'B': {
                'text': 'Raise the head above the water level.',
            },
            'C': {
                'text': 'Unlock all doors.',
            },
            'D': {
                'text': 'Wind down the window to let the water into the car.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 575,
        'text': 'What is the first thing a driver should do when the have a flat tire?',
        'answers': {
            'A': {
                'text': 'Hold the steering wheel firmly and keep the car secure',
            },
            'B': {
                'text': 'Shouldunlockalldoors.',
            },
            'C': {
                'text': 'Look at the rear mirror',
            },
            'D': {
                'text': 'Use the accelerator pedal',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 576,
        'text': 'Which one is NOT how to protect the flat tire properly?',
        'answers': {
            'A': {
                'text': 'Wipe the tires with rubber polish.',
            },
            'B': {
                'text': 'Do not carry excess weight.',
            },
            'C': {
                'text': 'Do not use tires that wear out or expire.',
            },
            'D': {
                'text': 'Fill the tires according to the criteria in the manual',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 577,
        'text': 'If the car mirror breaks while driving, what should you do?',
        'answers': {
            'A': {
                'text': 'Turn on emergency lights signals and park off to the left',
            },
            'B': {
                'text': 'Keep right and park the ca',
            },
            'C': {
                'text': 'Reverse to find the Parking',
            },
            'D': {
                'text': 'Drive straight ahead to find the service center',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 578,
        'text': 'If the heavy rain causes bad visibility, what should the drivers do?',
        'answers': {
            'A': {
                'text': 'Park at the safe area. Turn on the headlights and the emergency lights',
            },
            'B': {
                'text': 'Turn on headlights and speed up through the area with heavy rain.',
            },
            'C': {
                'text': 'Accelerate through rainy areas.',
            },
            'D': {
                'text': 'Park the car immediately',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 579,
        'text': 'When there is smoke in the engine while driving, what should the driver do?',
        'answers': {
            'A': {
                'text': 'Keep calm and drive slowly to park at roadside',
            },
            'B': {
                'text': 'Drive down the river by the roadside',
            },
            'C': {
                'text': 'Park and leave the car immediately.',
            },
            'D': {
                'text': 'Notify highway rescue',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 580,
        'text': 'What should you do when the engine becomes overheated while driving?',
        'answers': {
            'A': {
                'text': 'Stop the car safely. Let the engine cool down first.',
            },
            'B': {
                'text': 'Stop the car when safe. Splash cool water to cool the engine.',
            },
            'C': {
                'text': 'Stop the car when safe and open the radiator cap immediately',
            },
            'D': {
                'text': 'Stop the car where it is safe and pour water on the engine',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 581,
        'text': 'What is the most important thing to do when a train accident happens?',
        'answers': {
            'A': {
                'text': 'Get out of the car immediately.',
            },
            'B': {
                'text': 'Remove the battery terminals.',
            },
            'C': {
                'text': 'Park the car by the roadside.',
            },
            'D': {
                'text': 'Turn on emergency lights',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 582,
        'text': 'What does it mean If the temperature gauge reads high up to \' H’?',
        'answers': {
            'A': {
                'text': 'There was a malfunction in the cooling system.',
            },
            'B': {
                'text': 'This is at a normal level',
            },
            'C': {
                'text': 'Cooling system is broken down.',
            },
            'D': {
                'text': 'The cooling system is very good.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 583,
        'text': 'Moving the injured person using a blanket is NOT suitable. However, in which situation it is safe ti move an injured person with a blanket?',
        'answers': {
            'A': {
                'text': 'Not suitable for back injury.',
            },
            'B': {
                'text': 'Not suitable for injured person at arm and leg.',
            },
            'C': {
                'text': 'Not suitable for head injury.',
            },
            'D': {
                'text': 'None is correct',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 584,
        'text': 'Moving an injured person with two helpers is appropriate for what kind of patients?',
        'answers': {
            'A': {
                'text': 'For those who are not conscious.',
            },
            'B': {
                'text': 'Suitable for emergency',
            },
            'C': {
                'text': 'The injured person with light weight',
            },
            'D': {
                'text': 'Suitable for a patient who is conscious',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 585,
        'text': 'Moving an injured person with three helpers is appropriate for what kind of patients?',
        'answers': {
            'A': {
                'text': 'For those who are not conscious.',
            },
            'B': {
                'text': 'Suitable for emergency',
            },
            'C': {
                'text': 'The injured person with light weight',
            },
            'D': {
                'text': 'Suitable for patient who is conscious',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 588,
        'text': 'Moving the injured person with four hands holding on to each in the form of a seat or using a chair to lift is appropriate for what type of injured persons?',
        'answers': {
            'A': {
                'text': 'An injured leg person who is still feeling and can use both arms.',
            },
            'B': {
                'text': 'The unconscious victim',
            },
            'C': {
                'text': 'A persons with a body injury or who has broken bones',
            },
            'D': {
                'text': 'Injured person in an emergency',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 589,
        'text': 'If the cooling water in the engine system is insufficient, how will it affect your car?',
        'answers': {
            'A': {
                'text': 'Engine will have a high temperature and will malfunction.',
            },
            'B': {
                'text': 'The fuel will run out',
            },
            'C': {
                'text': 'Spark plugs will stop working',
            },
            'D': {
                'text': 'None is correct',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 590,
        'text': 'Select a reason why a driver should not open the radiator cap immediately when the engine is hot?',
        'answers': {
            'A': {
                'text': 'High pressure engine, hot water may come up and spray out.',
            },
            'B': {
                'text': 'The engine may explode.',
            },
            'C': {
                'text': 'Engine may stop working.',
            },
            'D': {
                'text': 'The engine may increase in noise',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 591,
        'text': 'What does this picture tell about the engine?',
        'answers': {
            'A': {
                'text': 'It has over heated',
            },
            'C': {
                'text': 'Normal engine temperature',
            },
            'B': {
                'text': 'Engine is too cold',
            },
            'D': {
                'text': 'None is correct',
            },
        },
        'picture': '591.png',
        'correctAnswerId': 'A',
    },
    {
        'id': 592,
        'text': 'Which one is not the correct way to move the patient?',
        'answers': {
            'A': {
                'text': 'Must move immediately before checking the symptoms.',
            },
            'C': {
                'text': 'Provide first aid before moving.',
            },
            'B': {
                'text': 'Must know where the wounds are.',
            },
            'D': {
                'text': 'Must move properly',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 593,
        'text': 'When a person is injured, what should NOT be done?',
        'answers': {
            'A': {
                'text': 'Move the injured person immediately.',
            },
            'B': {
                'text': 'Assess the situation with calmness',
            },
            'C': {
                'text': 'Helpers need to be sure they are safe.',
            },
            'D': {
                'text': 'Assess the casualties and deaths to check how many there are of them?',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 594,
        'text': 'In assessing the accident situation, what should NOT be considered?',
        'answers': {
            'A': {
                'text': 'Costs incurred by medical treatment.',
            },
            'B': {
                'text': 'The severity of the accident.',
            },
            'C': {
                'text': 'Consider how many people have been injured.',
            },
            'D': {
                'text': 'Time of accident',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 595,
        'text': 'What should you do when you are driving and it starts to rain?',
        'answers': {
            'A': {
                'text': 'SIow down',
            },
            'B': {
                'text': 'Speed up the car to get through the rain',
            },
            'C': {
                'text': 'Turn on emergency lights and rush through the area.',
            },
            'D': {
                'text': 'Stop the car by the roadside immediately.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 596,
        'text': 'Which of the following has the greatest impact in an accident situation?',
        'answers': {
            'A': {
                'text': 'Driver being unprepared',
            },
            'B': {
                'text': 'Geographical features',
            },
            'C': {
                'text': 'Movement of the car or pedestrian',
            },
            'D': {
                'text': 'Road surface',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 597,
        'text': 'In what situation can emergency lights be used properly?',
        'answers': {
            'A': {
                'text': 'Turn on emergency lights when the car breaks down on the shoulder.',
            },
            'B': {
                'text': 'Turn on the emergency lights while misty.',
            },
            'C': {
                'text': 'Turn on emergency lights when turning left at the intersection where there are no traffic light signals.',
            },
            'D': {
                'text': 'Turn on emergency lights to let other drivers know that you are going straight.',
            },
        },
        'correctAnswerId': 'A',
    },
    {
        'id': 598,
        'text': 'When should you use emergency lights?',
        'answers': {
            'A': {
                'text': 'When your car is broken',
            },
            'B': {
                'text': 'When you drive at low speed while getting lost',
            },
            'C': {
                'text': 'When you drive at low speed due to heavy rain',
            },
            'D': {
                'text': 'When you want to drive through the intersection in a straight direction.',
            },
        },
        'correctAnswerId': 'A',
    },
]
