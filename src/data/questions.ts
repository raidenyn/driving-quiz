import {Question} from "../store/questions/state";
import {Observable} from "rxjs";

export default (): Observable<Question[]> => {
    return new Observable<Question[]>((subscriber) => {
        subscriber.next(questions)
        subscriber.complete()
    })
}

const questions: Question[] = [
    {
        "id": 1,
        "text": "Where it is not permitted to make a U-turn?",
        "answers": {
            "A": {
                "text": "In the spaces between traffic islands."
            },
            "B": {
                "text": "On a bridge."
            },
            "C": {
                "text": "Where another vehicle is following at a distance of less than 1 jO meters."
            },
            "D": {
                "text": "Within 150 meters of a bridge."
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 2,
        "text": "How far back from the vehicle in front of your should you drive? (How far should you drive behind a vehicle?)",
        "answers": {
            "A": {
                "text": "Far enough to allow you to stop safety in an emergency."
            },
            "B": {
                "text": "50 meters"
            },
            "C": {
                "text": "30 meters"
            },
            "D": {
                "text": "30 meters"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 3,
        "text": "When you intend to stop or park your vehicle, you should:",
        "answers": {
            "A": {
                "text": "Park in the bus lane."
            },
            "B": {
                "text": "stop no further than 50 centimeters form the curb or the shoulder of the road."
            },
            "C": {
                "text": "Turn on your turn signal or your parking lights not less than 30 meters before stopping"
            },
            "D": {
                "text": "Park in a pedestrian crossing."
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 4,
        "text": "You are required to turn on your headlights:",
        "answers": {
            "A": {
                "text": "Not pass."
            },
            "B": {
                "text": "When it rains: When seeking to overtake other vehicles in an emergency."
            },
            "C": {
                "text": "When you intend to make a right turn."
            },
            "D": {
                "text": "When heavy fog restricts visibility to less than 150 meters"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 5,
        "text": "If your car breaks down along a highway, you should:",
        "answers": {
            "B": {
                "text": "Leave you rear."
            },
            "A": {
                "text": "Turn on your emergency flashers and leave your car."
            },
            "C": {
                "text": "Turn on your emergency flashers and place this sign in front of and behind your vehicle."
            },
            "D": {
                "text": "Open the hood and trunk of your car."
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 6,
        "text": "When descending a steep grade or hill, you should:",
        "answers": {
            "A": {
                "text": "Shift to neutral."
            },
            "B": {
                "text": "Use a low gear."
            },
            "C": {
                "text": "Keep your foot on the brake."
            },
            "D": {
                "text": "Turn off your engine."
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 7,
        "text": "You must not park:",
        "answers": {
            "A": {
                "text": "On the right-hand side of a two-way street."
            },
            "B": {
                "text": "In front of a school."
            },
            "C": {
                "text": "On a grade."
            },
            "D": {
                "text": "In front of a police station."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 8,
        "text": "When you intend to stop or park your vehicle, you should:",
        "answers": {
            "A": {
                "text": "Park in a pedestrian crossing."
            },
            "B": {
                "text": "Stop no further than 50 centimeters form the curb or the shoulder of the road."
            },
            "C": {
                "text": "Park in the bus lane."
            },
            "D": {
                "text": "Turn on your turn signal or your parking lights not less than 30 meters before stopping."
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 9,
        "text": "If you experience a breakdown, you should:",
        "answers": {
            "A": {
                "text": "Pull your vehicle on to the shoulder and turn on your emergency flashers."
            },
            "B": {
                "text": "Leave your car at the spot where it breaks down and arrange for repairs later."
            },
            "C": {
                "text": "Leave your car at the spot where it breaks down and arrange to have it towed immediately."
            },
            "D": {
                "text": "Leave your car at the spot where it breaks down and call a mechanic immediately."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 10,
        "text": "Which of the following statements is true?",
        "answers": {
            "A": {
                "text": "You may transport loads that extend no more than 2.5 meters from the rear of your vehicle."
            },
            "B": {
                "text": "You may transport loads that extend one meter out from each side of your vehicle."
            },
            "C": {
                "text": "You may transport loads no more than 3 meters high."
            },
            "D": {
                "text": "You may transport loads that extend no more than 2.5 meters from the front of your vehicle."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 11,
        "text": "Which of the following statements is true?",
        "answers": {
            "A": {
                "text": "When making a right turn, you should extend your right arm from the vehicle at shoulder-level and raise and lower your hand repeatedly."
            },
            "B": {
                "text": "Slow-moving vehicles must use the left lane."
            },
            "C": {
                "text": "When making a turn, you should give a signal at least 60 meters before turning."
            },
            "D": {
                "text": "Within the Bangkok Metropolitan Area, The maximum speed limit is 60 kilometers per hour."
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 12,
        "text": "Drivers are forbidden to:",
        "answers": {
            "A": {
                "text": "Park directly beneath a pedestrian bridge."
            },
            "B": {
                "text": "Pass Wlthin 50 meters of an intersection."
            },
            "C": {
                "text": "Park on the right-hand side of a one-way street."
            },
            "D": {
                "text": "Make a U-turn in an intersection."
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 13,
        "text": "When you see a flashing red light, you should:",
        "answers": {
            "A": {
                "text": "Not enter the road ahead"
            },
            "B": {
                "text": "Stop, and then proceed only when it is safe to do so"
            },
            "C": {
                "text": "Proceed with caution."
            },
            "D": {
                "text": "Reduce your speed. Then proceed with caution when it is safe to do so"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 14,
        "text": "If you begin to feel drowsy while driving, you should:",
        "answers": {
            "A": {
                "text": "Stop your vehicle and rest before proceeding"
            },
            "B": {
                "text": "Drink coffee."
            },
            "C": {
                "text": "Reduce your speed."
            },
            "D": {
                "text": "Take an amphetamine pill."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 15,
        "text": "When you see an emergency vehicle approaching, you should:",
        "answers": {
            "A": {
                "text": "Pull over to the left and stop."
            },
            "B": {
                "text": "Slowdown."
            },
            "C": {
                "text": "Stop, Proceed immediately after the emergency vehicle has passed."
            },
            "D": {
                "text": "Stop in the bus."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 16,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "No right turn."
            },
            "B": {
                "text": "Do not move to the right."
            },
            "C": {
                "text": "Right curve."
            },
            "D": {
                "text": "Merge ahead."
            }
        },
        "picture": "16.png",
        "correctAnswerId": "C"
    },
    {
        "id": 17,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "The maximum speed limit is 30 kilometers per hour."
            },
            "B": {
                "text": "The minimum speed limit is 30 kilometers per hour."
            },
            "C": {
                "text": "Vehicles weight more than 30 tons are prohibited."
            },
            "D": {
                "text": "Vehicles carrying loads weighing more than 30 tons are prohibited"
            }
        },
        "picture": "17.png",
        "correctAnswerId": "B"
    },
    {
        "id": 18,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "Only cars may enter."
            },
            "B": {
                "text": "Cars may not enter the road ahead."
            },
            "D": {
                "text": "Parking for cars only."
            },
            "C": {
                "text": "The road ahead is closed to all traffic."
            }
        },
        "picture": "18.png",
        "correctAnswerId": "B"
    },
    {
        "id": 19,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "No left turn."
            },
            "C": {
                "text": "Keep to the right."
            },
            "B": {
                "text": "Right turn allowed."
            },
            "D": {
                "text": "All traffic must move to the right."
            }
        },
        "picture": "19.png",
        "correctAnswerId": "D"
    },
    {
        "id": 20,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "No right turn."
            },
            "B": {
                "text": "Sharp curve ahead."
            },
            "C": {
                "text": "Right turn permitted"
            },
            "D": {
                "text": "Left turn permitted"
            }
        },
        "picture": "20.png",
        "correctAnswerId": "A"
    },
    {
        "id": 21,
        "text": "When you see this sign, you should:",
        "answers": {
            "A": {
                "text": "Proceed with caution."
            },
            "B": {
                "text": "Stop and allow oncoming traffic to pass before proceeding."
            },
            "C": {
                "text": "Reduce your speed and watch for oncoming traffic."
            },
            "D": {
                "text": "Not enter the road ahead."
            }
        },
        "picture": "21.png",
        "correctAnswerId": "B"
    },
    {
        "id": 22,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "No U-turn."
            },
            "B": {
                "text": "No cross traffic."
            },
            "C": {
                "text": "Use the right lane."
            },
            "D": {
                "text": "One-way traffic."
            }
        },
        "picture": "22.png",
        "correctAnswerId": "A"
    },
    {
        "id": 23,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "One-way traffic ahead."
            },
            "C": {
                "text": "Do not enter."
            },
            "B": {
                "text": "Yield to other traffic."
            },
            "D": {
                "text": "No parking"
            }
        },
        "picture": "23.png",
        "correctAnswerId": "C"
    },
    {
        "id": 24,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "Stop, Give larger vehicles the right of way."
            },
            "B": {
                "text": "Reduce your speed and give other vehicles the right of way."
            },
            "C": {
                "text": "Stop to allow cross traffic or traffic on the main road to pass before proceeding."
            },
            "D": {
                "text": "Stop Give smaller vehicles the right of way."
            }
        },
        "picture": "24.png",
        "correctAnswerId": "C"
    },
    {
        "id": 25,
        "text": "This sign mean:",
        "answers": {
            "A": {
                "text": "School zone, Watch for children"
            },
            "B": {
                "text": "No outlet"
            },
            "C": {
                "text": "Pedestrian crossing"
            },
            "D": {
                "text": "Pedestrian bridge ahead"
            }
        },
        "picture": "25.png",
        "correctAnswerId": "A"
    },
    {
        "id": 26,
        "text": "This sign mean:",
        "answers": {
            "A": {
                "text": "Parking allowed."
            },
            "B": {
                "text": "Temporary stopping for loading and unloading."
            },
            "C": {
                "text": "Stop. Watch for other vehicles in the intersection before proceeding."
            },
            "D": {
                "text": "Reduce your speed before proceeding."
            }
        },
        "picture": "26.png",
        "correctAnswerId": "C"
    },
    {
        "id": 27,
        "text": "This sign on the road surface indicates:",
        "answers": {
            "A": {
                "text": "No vehicles may cross the cross-hatched li"
            },
            "B": {
                "text": "The entrance/exit to a building."
            },
            "C": {
                "text": "No passing within the cross-hatched lines."
            },
            "D": {
                "text": "Absolutely no stopping in this area."
            }
        },
        "picture": "27.png",
        "correctAnswerId": "D"
    },
    {
        "id": 28,
        "text": "You may not park your car.",
        "answers": {
            "A": {
                "text": "within 15 meters of a fire hydrant."
            },
            "B": {
                "text": "within 15 meters of a traffic light."
            },
            "C": {
                "text": "within 15 meters of a railroad crossing"
            },
            "D": {
                "text": "within 15 meters of a pedestrian crossing."
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 29,
        "text": "Which of the pictures below illustrates proper parking?",
        "answers": {
            "A": {
                "text": "See the picture on the right hand"
            },
            "B": {
                "text": "See the picture on the right hand"
            },
            "C": {
                "text": "See the picture on the right hand"
            },
            "D": {
                "text": "See the picture on the right hand"
            }
        },
        "picture": "29.png",
        "correctAnswerId": "A"
    },
    {
        "id": 30,
        "text": "When descending a steep grade or hill, you should:",
        "answers": {
            "A": {
                "text": "Keep your foot on the brake"
            },
            "B": {
                "text": "Use a low gear"
            },
            "C": {
                "text": "Shift to neutral"
            },
            "D": {
                "text": "Turn off your engine"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 31,
        "text": "This sign means",
        "answers": {
            "A": {
                "text": "Move to the left"
            },
            "B": {
                "text": "Single lane traffic"
            },
            "C": {
                "text": "Do not pass"
            },
            "D": {
                "text": "One way traffic"
            }
        },
        "picture": "31.png",
        "correctAnswerId": "C"
    },
    {
        "id": 32,
        "text": "Which type of vehicle is prohibited to drive on a public roadway?",
        "answers": {
            "A": {
                "text": "A Tractor with rubber tires"
            },
            "B": {
                "text": "A tank used in warfare"
            },
            "C": {
                "text": "A vehicle with an 80 decibel engine"
            },
            "D": {
                "text": "vehicle with broken taillights"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 33,
        "text": "When you see a sign reading \"Left Turn on Red\", you should",
        "answers": {
            "A": {
                "text": "Lower your speed and turn left without delay"
            },
            "B": {
                "text": "Stop. Wait for pedestrians and other vehicles form the right to pass in front of you before turning left."
            },
            "C": {
                "text": "Stop. Wait for a green light before turning left"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 34,
        "text": "In the situation picture below, you should",
        "answers": {
            "A": {
                "text": "Put on your right turn signal and pass on the left without delay"
            },
            "B": {
                "text": "Move to the right and proceed around the obstruction without delay."
            },
            "C": {
                "text": "Put on your right turn signal and wait for Car A to pass before proceeding"
            },
            "D": {
                "text": "Stop and wait for other car to pass."
            }
        },
        "picture": "34.png",
        "correctAnswerId": "C"
    },
    {
        "id": 35,
        "text": "Which of the pictures below shows proper stopping?",
        "answers": {
            "A": {
                "text": "Stop and slow down"
            },
            "B": {
                "text": "The car traveling faster"
            },
            "C": {
                "text": "Car B"
            },
            "D": {
                "text": "Car A"
            }
        },
        "picture": "35.png",
        "correctAnswerId": "D"
    },
    {
        "id": 36,
        "text": "Which of the pictures below illustrates proper parking?",
        "answers": {
            "A": {
                "text": "See the picture on the right hand"
            },
            "B": {
                "text": "See the picture on the right hand"
            },
            "C": {
                "text": "See the picture on the right hand"
            },
            "D": {
                "text": "See the picture on the right hand"
            }
        },
        "picture": "36.png",
        "correctAnswerId": "A"
    },
    {
        "id": 37,
        "text": "As a driver, you must not",
        "answers": {
            "A": {
                "text": "Make a turn into the bus lane"
            },
            "B": {
                "text": "Drive a racing car on a public road with the permission of the relevant traffic authorities"
            },
            "C": {
                "text": "Carry loads that obstruct your vision behind and to the sides of your vehicle"
            },
            "D": {
                "text": "Enter halfway into the next lane when an obstruction blocks the left side of the lane you are driving in"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 38,
        "text": "The driver of the vehicle in the picture:",
        "answers": {
            "A": {
                "text": "May not pass or otherwise move into the lane on the right."
            },
            "C": {
                "text": "May not make a right turn"
            },
            "B": {
                "text": "Stop of slow down"
            },
            "D": {
                "text": "May make a U-Turn"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 39,
        "text": "When is it prohibited for a motorist to drive?",
        "answers": {
            "A": {
                "text": "After taking medicine for diarrhea"
            },
            "B": {
                "text": "mmediately after consuming alcohol or any other intoxicant"
            },
            "C": {
                "text": "When he/she has a cold or flu"
            },
            "D": {
                "text": "When there is insufficient light"
            }
        },
        "picture": "39.png",
        "correctAnswerId": "B"
    },
    {
        "id": 40,
        "text": "The driver in the car should:",
        "answers": {
            "A": {
                "text": "Stop behind the lone, and wait to make sure there is no cross Traffic before proceeding"
            },
            "B": {
                "text": "Slow Down"
            },
            "C": {
                "text": "Proceeding immediately withoul stopping or slowing"
            },
            "D": {
                "text": "Reduce his/her speed and proceed with caution"
            }
        },
        "picture": "40.png",
        "correctAnswerId": "A"
    },
    {
        "id": 41,
        "text": "When you see this sign, you should",
        "answers": {
            "A": {
                "text": "Reduce your speed. The road ahead curves to the rihgt"
            },
            "B": {
                "text": "Reduce your speed, then carefully turn left"
            },
            "C": {
                "text": "No left turn D. Do not straight ahead"
            }
        },
        "picture": "41.png",
        "correctAnswerId": "A"
    },
    {
        "id": 42,
        "text": "When you see this sign, you should",
        "answers": {
            "A": {
                "text": "Drive carefully. Winding road"
            },
            "B": {
                "text": "Watch for vehicles cutting in front"
            },
            "C": {
                "text": "Reduced you speed. The road may be slippery"
            },
            "D": {
                "text": "Stop immediately"
            }
        },
        "picture": "42.png",
        "correctAnswerId": "C"
    },
    {
        "id": 43,
        "text": "Which of the following is NOT permitted?",
        "answers": {
            "A": {
                "text": "Driving when your ability to operate a vehicle is impaired"
            },
            "B": {
                "text": "Driving in din or dark conditions with the headlights on, giving visibility of 150 meters"
            },
            "C": {
                "text": "Driving a racing car on a public road with the permission of the relevant traffic authorities"
            },
            "D": {
                "text": "Passing on the left when the vehicle you are passing is waiting to make a right turn"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 44,
        "text": "Which of these statements is true about passing?",
        "answers": {
            "A": {
                "text": "You may not pass on the left on a road with two or more lanes moving in the same direction"
            },
            "B": {
                "text": "You may not pass within 150 meters of an intersection"
            },
            "C": {
                "text": "You may not pass when there is an obstruction in the left lane"
            },
            "D": {
                "text": "You may not pass on a bridge"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 45,
        "text": "Which of the pictures below illustrates proper parking",
        "answers": {
            "A": {
                "text": "See the picture on the right hand"
            },
            "B": {
                "text": "See the picture on the right hand"
            },
            "C": {
                "text": "See the picture on the right hand"
            },
            "D": {
                "text": "See the picture on the right hand"
            }
        },
        "picture": "45.png",
        "correctAnswerId": "C"
    },
    {
        "id": 46,
        "text": "In the picture on the right, driver must",
        "answers": {
            "A": {
                "text": "Reduce his/her speed and proceed through the intersection"
            },
            "B": {
                "text": "Slow Down"
            },
            "C": {
                "text": "Stop and wait for other cars to clear the intersection before proceeding"
            },
            "D": {
                "text": "Proceed through the intersection without stopping"
            }
        },
        "picture": "46.png",
        "correctAnswerId": "C"
    },
    {
        "id": 47,
        "text": "In which of the following circumstances is it forbidden to pass?",
        "answers": {
            "A": {
                "text": "When there is flooding"
            },
            "B": {
                "text": "To use the bus lane as a passing lane"
            },
            "C": {
                "text": "In front of a hospital"
            },
            "D": {
                "text": "To pass on the left when the vehicle in front of you is turning right"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 48,
        "text": "Which type of vehicle is prohibited to use on a public road?",
        "answers": {
            "A": {
                "text": "A tractor with rubber tires."
            },
            "B": {
                "text": "A vehicle with broken brake lights."
            },
            "C": {
                "text": "A tank used in warfare"
            },
            "D": {
                "text": "A vehicle whose engine is louder than 80 decibels"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 49,
        "text": "The driver intending to make a right turn in the picture on the left should:",
        "answers": {
            "A": {
                "text": "Slow Down"
            },
            "B": {
                "text": "Buing to turn right, then stops to allow the pedestrians to cross the street before completing"
            },
            "C": {
                "text": "Stop to allow the pedestrians in the crosswalk to reach the other side of the street before turning right"
            },
            "D": {
                "text": "Turn immediately without stopping"
            }
        },
        "picture": "49.png",
        "correctAnswerId": "B"
    },
    {
        "id": 50,
        "text": "When is it prohibited to pass?",
        "answers": {
            "A": {
                "text": "When you are passing on the left and the vehicle being passed is waiting to turn right"
            },
            "B": {
                "text": "Where the road is divided by the broken line."
            },
            "C": {
                "text": "When you are passing on the left on a road with two or more lanes moving in the same direction"
            },
            "D": {
                "text": "Within 30 meters of a crossroad"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 51,
        "text": "When you see this sign you should?",
        "answers": {
            "A": {
                "text": "Reduce your speed and check for oncoming traffic before crossing, One-lane Bridge ahead"
            },
            "B": {
                "text": "Reduce your speed and proceed across the bridge."
            },
            "C": {
                "text": "Use low gear. High bridge"
            },
            "D": {
                "text": "Reduce your speed and use the detour Bridge out."
            }
        },
        "picture": "51.png",
        "correctAnswerId": "A"
    },
    {
        "id": 52,
        "text": "How far back from the vehicle in front of you should you drive?",
        "answers": {
            "A": {
                "text": "Far enough to allow you to stop safety in an emergency"
            },
            "B": {
                "text": "2.5 meters"
            },
            "C": {
                "text": "18 meters"
            },
            "D": {
                "text": "30 meters"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 53,
        "text": "Where is it prohibited to make a U-Turn?",
        "answers": {
            "A": {
                "text": "ln an intersection"
            },
            "B": {
                "text": "In a pedestrian crossing"
            },
            "C": {
                "text": "On a bridge"
            },
            "D": {
                "text": "Where another vehicle is following at a distance of less than 20 meters"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 54,
        "text": "It is prohibited to:",
        "answers": {
            "A": {
                "text": "Pass on the left on a road with two or more lanes of traffic moving in the same direction."
            },
            "B": {
                "text": "Drive when there is insufficient light"
            },
            "C": {
                "text": "Drive a racing car in a public road with the permission or the relevant traffic authorities."
            },
            "D": {
                "text": "Operate a motor vehicle if you feel the onset of a heart attack."
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 55,
        "text": "When is it prohibited to pass?",
        "answers": {
            "A": {
                "text": "When you are passing on the left on a road with two or more lanes moving in the same direction"
            },
            "B": {
                "text": "When you are passing on the left and the vehicle being passed is waiting to turn right"
            },
            "C": {
                "text": "Within 30 meters of a crossroad"
            },
            "D": {
                "text": "Where the road is divided by a broken line"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 56,
        "text": "Which of the following statement is true?",
        "answers": {
            "A": {
                "text": "You may display license plates that you have had made yourself"
            },
            "B": {
                "text": "You may allow unlicensed drivers to use your vehicle"
            },
            "C": {
                "text": "It is prohibited to drive a vehicle for which the annual tax has not been paid"
            },
            "D": {
                "text": "You may allow someone else to use your driver license"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 57,
        "text": "This sign means:",
        "answers": {
            "A": {
                "text": "Bridge ahead"
            },
            "C": {
                "text": "Parallel road ahead"
            },
            "B": {
                "text": "Road narrows ahead"
            },
            "D": {
                "text": "Tunnel ahead"
            }
        },
        "picture": "57.png",
        "correctAnswerId": "B"
    },
    {
        "id": 58,
        "text": "You are required to turn on your head lights:",
        "answers": {
            "A": {
                "text": "When it rains: When seeking to overtake other vehicles in an emergency"
            },
            "B": {
                "text": "When heavy fog restricts visibility to less than 150 meters"
            },
            "C": {
                "text": "When you intend to make a right turn"
            },
            "D": {
                "text": "Not pass"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 59,
        "text": "As a driver, you must not:",
        "answers": {
            "A": {
                "text": "Enter half way into the nest lane when an obstruction blocks the left side of the lane you are driving in"
            },
            "B": {
                "text": "Make a turn into the bus lane"
            },
            "C": {
                "text": "Drive a racing car on a public road with the permission of the relevant traffic authorities"
            },
            "D": {
                "text": "Carry loads that obstruct your vision behind and to the sides of your vehicle"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 60,
        "text": "When you see a flashing red light, you should:",
        "answers": {
            "A": {
                "text": "stop, then proceed only when it is safe to do so"
            },
            "B": {
                "text": "Not enter the road ahead"
            },
            "C": {
                "text": "Proceed with caution"
            },
            "D": {
                "text": "Reduce your speed. Then proceed with caution when it is safe to do"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 61,
        "text": "Which of the pictures below illustrates proper parking",
        "answers": {
            "A": {
                "text": "See the picture on the right hand"
            },
            "B": {
                "text": "See the picture on the right hand"
            },
            "C": {
                "text": "See the picture on the right hand"
            },
            "D": {
                "text": "See the picture on the right hand"
            }
        },
        "picture": "61.png",
        "correctAnswerId": "B"
    },
    {
        "id": 62,
        "text": "Which of the pictures below illustrates proper parking?",
        "answers": {
            "A": {
                "text": "See the picture on the right hand"
            },
            "B": {
                "text": "See the picture on the right hand"
            },
            "C": {
                "text": "See the picture on the right hand"
            },
            "D": {
                "text": "See the picture on the right hand"
            }
        },
        "picture": "62.png",
        "correctAnswerId": "A"
    },
    {
        "id": 63,
        "text": "The divided lines in the middle of the road pictured on the left indicate:",
        "answers": {
            "A": {
                "text": "Move your car off the road and turn on emergency flashed"
            },
            "B": {
                "text": "The driver of the car in the picture may turn right."
            },
            "C": {
                "text": "The driver of the car in the picture may not pull into the right lane to overtake another vehicle"
            },
            "D": {
                "text": "The driver of the car in the picture may make a left turn"
            }
        },
        "picture": "63.png",
        "correctAnswerId": "C"
    },
    {
        "id": 64,
        "text": "Which or the following vehicles is it prohibited to use on a public road?",
        "answers": {
            "A": {
                "text": "A vehicle with a horn louder than 70 decibels"
            },
            "B": {
                "text": "A vehicle without a front windshield"
            },
            "C": {
                "text": "A vehicle displaying dealer's plates"
            },
            "D": {
                "text": "A tank used in warfare"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 65,
        "text": "In the picture, the driver of Car should.",
        "answers": {
            "A": {
                "text": "Reduce his/her speed to allow the cars on the left and right to pass before proceeding"
            },
            "B": {
                "text": "Stop to allow the car on the right to pass before proceeding"
            },
            "C": {
                "text": "Stop to allow the car on the left to pass before proceeding"
            },
            "D": {
                "text": "Stop and wait for other car to pass"
            }
        },
        "picture": "65.png",
        "correctAnswerId": "C"
    },
    {
        "id": 66,
        "text": "In the picture on the right, the driver of Car D wishes to go straight. To do so, he/she should:",
        "answers": {
            "A": {
                "text": "Stop and wait for Car B to turn right before proceeding"
            },
            "B": {
                "text": "Stop and wait for Car A to pass before proceeding"
            },
            "C": {
                "text": "Stop and wait for Car C to turn left before proceeding"
            },
            "D": {
                "text": "Slowdown"
            }
        },
        "picture": "66.png",
        "correctAnswerId": "B"
    },
    {
        "id": 67,
        "text": "Which of these pictures is correct?",
        "answers": {
            "A": {
                "text": "See the picture on the right hand"
            },
            "B": {
                "text": "See the picture on the right hand"
            },
            "C": {
                "text": "See the picture on the right hand"
            },
            "D": {
                "text": "See the picture on the right hand"
            }
        },
        "picture": "67.png",
        "correctAnswerId": "A"
    },
    {
        "id": 68,
        "text": "What is the penalty for drive without license?",
        "answers": {
            "A": {
                "text": "Jail not over 1 year"
            },
            "B": {
                "text": "Jail not over 1 month or fine not over 1,000 Baht or Both"
            },
            "C": {
                "text": "Fine not over 2,000 Baht"
            },
            "D": {
                "text": "Fine not over 5 000 baht"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 69,
        "text": "How much will an additional car that does not pay annual tax within the deadline?",
        "answers": {
            "A": {
                "text": "1% per month"
            },
            "B": {
                "text": "1% per year"
            },
            "C": {
                "text": "10% per month"
            },
            "D": {
                "text": "20% per year"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 70,
        "text": "How much renewal of a personal driver's license (5 years) can be extended in advance? (2-5years)",
        "answers": {
            "A": {
                "text": "30 days"
            },
            "B": {
                "text": "60 days"
            },
            "C": {
                "text": "1 month"
            },
            "D": {
                "text": "3 months"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 71,
        "text": "At what age of the car have to undertake a technical check before apply to renew registration.",
        "answers": {
            "A": {
                "text": "5 years"
            },
            "B": {
                "text": "6 years"
            },
            "C": {
                "text": "3 years"
            },
            "D": {
                "text": "7 years"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 72,
        "text": "At what age of the motorbike have to undertake a technical check before apply to renew registration.",
        "answers": {
            "A": {
                "text": "1 years"
            },
            "B": {
                "text": "3 years"
            },
            "C": {
                "text": "2 years"
            },
            "D": {
                "text": "5 years"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 73,
        "text": "How much renewal of 5 years license can be extended in advance?",
        "answers": {
            "A": {
                "text": "1 months"
            },
            "B": {
                "text": "3 months"
            },
            "C": {
                "text": "4 months"
            },
            "D": {
                "text": "6 months"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 74,
        "text": "How many years does the applicant can get the car temporally license?",
        "answers": {
            "A": {
                "text": "15 years"
            },
            "B": {
                "text": "16 years"
            },
            "C": {
                "text": "17 year"
            },
            "D": {
                "text": "18 years"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 75,
        "text": "Which area can make a U-turn?",
        "answers": {
            "A": {
                "text": "The lane shown prohibit U-turn"
            },
            "C": {
                "text": "150 meter from the foot of bridge"
            },
            "B": {
                "text": "On the bridge"
            },
            "D": {
                "text": "Safety Zone"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 76,
        "text": "What is the penalty for excess alcohol over the law limit?",
        "answers": {
            "A": {
                "text": "Jail 3 months or fine from 1,000-50,000 baht"
            },
            "B": {
                "text": "Jail 1 year or fine from 5,000-20,OOObaht or Both"
            },
            "C": {
                "text": "Fine 5,000 baht"
            },
            "D": {
                "text": "Fine 10,000 baht"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 77,
        "text": "Who exempted from wearing a helmet?",
        "answers": {
            "A": {
                "text": "Monk and Novice"
            },
            "B": {
                "text": "Passenger"
            },
            "C": {
                "text": "Children"
            },
            "D": {
                "text": "Driver"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 78,
        "text": "Loading things, how the driver have to do?",
        "answers": {
            "A": {
                "text": "Loading overhang wider than the width of the car each side 1 meter"
            },
            "B": {
                "text": "Loading overhang behind the car not more than 2.5 meter."
            },
            "C": {
                "text": "Loading overhang high more than 5 meter."
            },
            "D": {
                "text": "Loading overhang in front not more than 2.5 meter."
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 79,
        "text": "What is the meaning of this sign?",
        "answers": {
            "A": {
                "text": "Reduce speed line"
            },
            "B": {
                "text": "Arrow to turn"
            },
            "C": {
                "text": "Prohibit to turn"
            },
            "D": {
                "text": "Allow to park"
            }
        },
        "picture": "79.png",
        "correctAnswerId": "A"
    },
    {
        "id": 80,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "The car not less than 3 person can entrance this lane"
            },
            "B": {
                "text": "The car with 1 person can entrance this lane"
            },
            "C": {
                "text": "The carwith more than 3 person cannot entrance this lane"
            },
            "D": {
                "text": "The car with 2 person can entrance this lane"
            }
        },
        "picture": "80.png",
        "correctAnswerId": "A"
    },
    {
        "id": 81,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive into the car lane and motorbike"
            },
            "B": {
                "text": "Prohibit to entrence or overtake into the bus lane"
            },
            "C": {
                "text": "Drive straight or turn right"
            },
            "D": {
                "text": "Prohibit to drive straight or turn right"
            }
        },
        "picture": "81.png",
        "correctAnswerId": "B"
    },
    {
        "id": 82,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and careful the man work, it may have the tools on the road."
            },
            "B": {
                "text": "Slow drive and careful the man surveying the road"
            },
            "C": {
                "text": "Slow drive and careful the machine working"
            },
            "D": {
                "text": "Slow drive and careful the man surveying the tools on the road"
            }
        },
        "picture": "82.png",
        "correctAnswerId": "A"
    },
    {
        "id": 83,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and careful road ahead were surveying on the road surface or the lane"
            },
            "B": {
                "text": "Drive fast and more careful man working"
            },
            "C": {
                "text": "Drive fast and more careful construction machine working"
            },
            "D": {
                "text": "Slow drive and more careful to survey the construction things"
            }
        },
        "picture": "83.png",
        "correctAnswerId": "A"
    },
    {
        "id": 84,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive fast and more careful for man work at road ahead"
            },
            "B": {
                "text": "Machine entry only"
            },
            "C": {
                "text": "Slow drive and more careful there are road surveying ahead"
            },
            "D": {
                "text": "Slow drive there are machine working ahead."
            }
        },
        "picture": "84.png",
        "correctAnswerId": "D"
    },
    {
        "id": 85,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive fast and more careful there are narrow bridge ahead"
            },
            "B": {
                "text": "Drive slow and more careful there are steep hill descent ahead"
            },
            "C": {
                "text": "Slow drive and more careful there are steep hill ascent"
            },
            "D": {
                "text": "Slow drive and more careful there are left diversion ahead"
            }
        },
        "picture": "85.png",
        "correctAnswerId": "D"
    },
    {
        "id": 86,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and more careful there are steep hill ascent"
            },
            "B": {
                "text": "Slow drive and more careful there are right diversion ahead"
            },
            "C": {
                "text": "Drive fast and more careful there are steep hill descent ahead"
            },
            "D": {
                "text": "Slow Drive and more careful there are narrow bridge ahead"
            }
        },
        "picture": "86.png",
        "correctAnswerId": "B"
    },
    {
        "id": 87,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and more careful car width not more than 2.50 meter can pass"
            },
            "B": {
                "text": "Slow drive and more careful road ahead wider than 2.50 meter"
            },
            "C": {
                "text": "Slow drive and more careful road ahead bellowerthan 2.50 meter"
            },
            "D": {
                "text": "Slow drive and more careful road ahead higher than 2.50 meter"
            }
        },
        "picture": "87.png",
        "correctAnswerId": "A"
    },
    {
        "id": 88,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and more careful the road narrow not more than 2.50 meter"
            },
            "B": {
                "text": "Slow drive and more careful road ahead wider than 2.50 meter"
            },
            "C": {
                "text": "Slow drive and more careful road ahead higher than 2.50 meter"
            },
            "D": {
                "text": "Low drive and more careful car higher not more than 2.50 meter can pass"
            }
        },
        "picture": "88.png",
        "correctAnswerId": "D"
    },
    {
        "id": 89,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and more careful the danger from the car opposite direction because steep hill ascent ahead"
            },
            "B": {
                "text": "Slow drive and more careful and drive fast away from the falling rocks"
            },
            "C": {
                "text": "Slow drive and more careful use \"N\" gear or turn the engine off for safe"
            },
            "D": {
                "text": "Slow drive and more careful use \"N\" gear when steep hill decent"
            }
        },
        "picture": "89.png",
        "correctAnswerId": "A"
    },
    {
        "id": 90,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Use \"N\" gear or turn the engine off for safe"
            },
            "B": {
                "text": "Steep hill decent"
            },
            "C": {
                "text": "Steep hill ascent use \"N\" gear"
            },
            "D": {
                "text": "Drive fast"
            }
        },
        "picture": "90.png",
        "correctAnswerId": "B"
    },
    {
        "id": 91,
        "text": "How the driver should do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow drive and more careful rough road ahead"
            },
            "B": {
                "text": "Slow drive and more careful of falling rocks"
            },
            "C": {
                "text": "Slow drive and more careful of debris"
            },
            "D": {
                "text": "Slow drive and more careful of slippery road"
            }
        },
        "picture": "91.png",
        "correctAnswerId": "A"
    },
    {
        "id": 92,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "U-turn area"
            },
            "B": {
                "text": "Cannot U-turn"
            },
            "C": {
                "text": "Cannot overtake"
            },
            "D": {
                "text": "Toll way"
            }
        },
        "picture": "92.png",
        "correctAnswerId": "D"
    },
    {
        "id": 93,
        "text": "How to solve the rust on battery",
        "answers": {
            "A": {
                "text": "Wash with warm water and apply grease"
            },
            "C": {
                "text": "Wash with lemon juice"
            },
            "B": {
                "text": "Wash with vinegar"
            },
            "D": {
                "text": "Wash with distilled water"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 94,
        "text": "What kind of water can fill in battery?",
        "answers": {
            "A": {
                "text": "Distilled water"
            },
            "B": {
                "text": "Rainwater"
            },
            "C": {
                "text": "Ground water"
            },
            "D": {
                "text": "Soap water"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 95,
        "text": "What is the level of filling the distilled water into battery?",
        "answers": {
            "A": {
                "text": "Within the define line"
            },
            "B": {
                "text": "A bit under the define line"
            },
            "C": {
                "text": "A bit over the define line"
            },
            "D": {
                "text": "Flow over the edge"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 96,
        "text": "How much the engine oil should to refill?",
        "answers": {
            "A": {
                "text": "Fill over the line on the engine gauge"
            },
            "B": {
                "text": "Fill equal to the upper line of the engine gauge"
            },
            "C": {
                "text": "Fill lower than the line on the engine gauge"
            },
            "D": {
                "text": "Fill full over the engine"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 97,
        "text": "What kind of water should not fill into the radiator tank.",
        "answers": {
            "A": {
                "text": "Ground water"
            },
            "B": {
                "text": "Rain water"
            },
            "C": {
                "text": "Distilled water"
            },
            "D": {
                "text": "Tap water"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 98,
        "text": "What should you not to do when driving while it rains?",
        "answers": {
            "A": {
                "text": "Turn on the whisper"
            },
            "B": {
                "text": "Turn on the emergency light"
            },
            "C": {
                "text": "Drive more carefully"
            },
            "D": {
                "text": "Reduce the speed"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 99,
        "text": "What is the color should not show on the dash board while driving?",
        "answers": {
            "A": {
                "text": "Red"
            },
            "B": {
                "text": "Green"
            },
            "C": {
                "text": "Yellow"
            },
            "D": {
                "text": "Blue"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 100,
        "text": "For safety of driving in the rainy season, what should you check in priority?",
        "answers": {
            "A": {
                "text": "Wiper"
            },
            "B": {
                "text": "Water in the radiator tank"
            },
            "C": {
                "text": "Distilled water"
            },
            "D": {
                "text": "Door and window"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 101,
        "text": "Stopping the car on a slope, how should you do in order to be safe?",
        "answers": {
            "A": {
                "text": "Press the clutch pedal, press the brake pedal, pull the hand brake and change gear to N position"
            },
            "B": {
                "text": "Press the clutch pedal, press the brake pedal, and change gear to \"N\" position"
            },
            "C": {
                "text": "Press the clutch pedal, press the brake pedal, and pull the hand brake"
            },
            "D": {
                "text": "Press the brake pedal, and pull the hand brake"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 102,
        "text": "The tire is broken while driving, what would happen with the car?",
        "answers": {
            "A": {
                "text": "The Steering wheel will be weightless"
            },
            "B": {
                "text": "The steering will be heavy and the car will tilt."
            },
            "C": {
                "text": "The car will stop suddenly"
            },
            "D": {
                "text": "The brake system will not working"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 103,
        "text": "The tire is broken while driving, what should the driver do?",
        "answers": {
            "A": {
                "text": "Remained clam, control the steering wheel, reduce the speed and should the brake pedal not suddenly press"
            },
            "B": {
                "text": "Suddenly press the brake pedal"
            },
            "C": {
                "text": "Turn steering wheel quickly and pull over along the road"
            },
            "D": {
                "text": "Change gear to \"N\" position and press the brake pedal quickly"
            }
        },
        "correctAnswerId": "A",
    },
    {
        "id": 104,
        "text": "When driving, which behavior should you avoid the most?",
        "answers": {
            "A": {
                "text": "Drive faster than the speed required the law"
            },
            "B": {
                "text": "Change lane"
            },
            "C": {
                "text": "Driving at the constant speed"
            },
            "D": {
                "text": "Overtaking other cars when it is considered safe"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 105,
        "text": "Which is the correctly use of the emergency lighting?",
        "answers": {
            "A": {
                "text": "Rain"
            },
            "B": {
                "text": "Drive pass the intersection"
            },
            "C": {
                "text": "Car broken on the highway"
            },
            "D": {
                "text": "Foggy area"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 106,
        "text": "While driving the engine is over heat, what you should do?",
        "answers": {
            "A": {
                "text": "Stop at the safety area and put the ice in the engine."
            },
            "B": {
                "text": "Stop at the safety area and wait the engine cool down."
            },
            "C": {
                "text": "Stop at the safety areaa and fill the water into boiler immediately."
            },
            "D": {
                "text": "Stop at the safety areaa and pour the water over engine."
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 107,
        "text": "What is the speed limit in Bangkok, Pattaya or Munlclpnilty?",
        "answers": {
            "A": {
                "text": "Not more than 90 km. per hour"
            },
            "C": {
                "text": "Not more than 60 km. Per hour"
            },
            "B": {
                "text": "Not more than 80 km. per hour"
            },
            "D": {
                "text": "Not more than 100 km. per hour"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 108,
        "text": "What is the speed limit outside Bangkok, Pattaya or Municipality?",
        "answers": {
            "A": {
                "text": "Not more than 120 km. per hour"
            },
            "C": {
                "text": "Not more than 80 km. per hour"
            },
            "B": {
                "text": "Not more than 100 km. per hour"
            },
            "D": {
                "text": "Not more than 90 km. per hour"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 109,
        "text": "When the police stretch the left arm shoulder, driver who drive from which side or the police must stop?",
        "answers": {
            "A": {
                "text": "Side"
            },
            "B": {
                "text": "Back and front"
            },
            "C": {
                "text": "Back"
            },
            "D": {
                "text": "Front"
            }
        },
        "picture": "109.png",
        "correctAnswerId": "C"
    },
    {
        "id": 110,
        "text": "When the police stretch his right forearm vertical to the upper arm and palm up, driver who drive from which side or the police must stop?",
        "answers": {
            "A": {
                "text": "Back"
            },
            "B": {
                "text": "Front and Back"
            },
            "C": {
                "text": "Front"
            },
            "D": {
                "text": "Side and Back"
            }
        },
        "picture": "110.png",
        "correctAnswerId": "C"
    },
    {
        "id": 112,
        "text": "What should be check the car electrical system?",
        "answers": {
            "A": {
                "text": "Left - Right turning signal"
            },
            "B": {
                "text": "Brake lights and headlights"
            },
            "C": {
                "text": "Headlights and Left - Right turning signal"
            },
            "D": {
                "text": "Left - Right turning signal, high-low beam light, brake light, license plate light"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 113,
        "text": "What level of the water should be added to the reserve tank?",
        "answers": {
            "A": {
                "text": "Between high and low criteria set aside by the reserve tank"
            },
            "B": {
                "text": "Full Tank"
            },
            "C": {
                "text": "Any amount can be added"
            },
            "D": {
                "text": "Half Tank"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 114,
        "text": "Why should not fill the water full of tank?",
        "answers": {
            "A": {
                "text": "Because it will damage the engine."
            },
            "C": {
                "text": "Because it will make the radiator rust more"
            },
            "B": {
                "text": "Because the water in the boiler will be hotter"
            },
            "D": {
                "text": "Because the water get expansion when it hot"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 115,
        "text": "What is the function of the car radiator?",
        "answers": {
            "A": {
                "text": "Pooling the engine"
            },
            "C": {
                "text": "Cooling the passenger room"
            },
            "B": {
                "text": "Make the car run faster"
            },
            "D": {
                "text": "Resulting in fuel efficiency"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 116,
        "text": "What level of water should be added to the reserve tank?",
        "answers": {
            "A": {
                "text": "Between full and low"
            },
            "B": {
                "text": "Over the full level"
            },
            "C": {
                "text": "Below low level"
            },
            "D": {
                "text": "Fill to the radiator cap"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 117,
        "text": "How to check the battery light easily?",
        "answers": {
            "A": {
                "text": "Honk the horn to check the sound whether ms normal or softer."
            },
            "B": {
                "text": "Drive a car for 2-3 meters and test the brakes."
            },
            "C": {
                "text": "Press the clutch and change the gear in every position"
            },
            "D": {
                "text": "Turn the steering wheel to the left and right"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 118,
        "text": "Which battery terminal should remove first?",
        "answers": {
            "A": {
                "text": "Any of them"
            },
            "B": {
                "text": "Positive terminal (anode)"
            },
            "C": {
                "text": "Both together"
            },
            "D": {
                "text": "Negative terminal (cathode)"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 119,
        "text": "How many kilometers should switch tires?",
        "answers": {
            "A": {
                "text": "10,000 km"
            },
            "B": {
                "text": "25,000 km"
            },
            "C": {
                "text": "30,000 km"
            },
            "D": {
                "text": "35,000 km"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 120,
        "text": "How to check the auto belt tension?",
        "answers": {
            "A": {
                "text": "Use a wooden"
            },
            "B": {
                "text": "Check by eyes"
            },
            "C": {
                "text": "Hand press on the center of the belt"
            },
            "D": {
                "text": "Take out the belt to measure"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 121,
        "text": "What is the good quality color of brake fluid?",
        "answers": {
            "A": {
                "text": "Clear Yellow"
            },
            "B": {
                "text": "Thick Black"
            },
            "C": {
                "text": "Red"
            },
            "D": {
                "text": "Dark Brown"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 122,
        "text": "What is the color of the brake fluid degenerate?",
        "answers": {
            "A": {
                "text": "Blue"
            },
            "B": {
                "text": "Red"
            },
            "C": {
                "text": "Black"
            },
            "D": {
                "text": "Yellow"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 123,
        "text": "Which document should the driver need to use with the driving license?",
        "answers": {
            "A": {
                "text": "Identity Card"
            },
            "B": {
                "text": "House Registration"
            },
            "C": {
                "text": "Copy of car registration book"
            },
            "D": {
                "text": "Social security card"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 124,
        "text": "How many days you have to pay the fine for break the road traffic law after get the ticket from the police?",
        "answers": {
            "A": {
                "text": "10 days"
            },
            "B": {
                "text": "7 days"
            },
            "C": {
                "text": "15 days"
            },
            "D": {
                "text": "30 days"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 125,
        "text": "How many years is a temporary driving license?",
        "answers": {
            "A": {
                "text": "1 years"
            },
            "B": {
                "text": "2 years"
            },
            "C": {
                "text": "3 years"
            },
            "D": {
                "text": "4 years"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 126,
        "text": "How many day have to report to the officer after change the car color?",
        "answers": {
            "A": {
                "text": "7 days"
            },
            "B": {
                "text": "10 days"
            },
            "C": {
                "text": "15 days"
            },
            "D": {
                "text": "20 days"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 127,
        "text": "What should you do when you saw this sigh?",
        "answers": {
            "A": {
                "text": "More careful then stop the car"
            },
            "B": {
                "text": "More careful stop and drop zone"
            },
            "C": {
                "text": "Drive slow if considered unsafe for other cars or pedestrians in the road ahead, must stop befor line"
            },
            "D": {
                "text": "More careful then park the car"
            }
        },
        "picture": "127.png",
        "correctAnswerId": "C"
    },
    {
        "id": 128,
        "text": "What is the meaning of this sign?",
        "answers": {
            "A": {
                "text": "Stopping zone"
            },
            "B": {
                "text": "Drop off zone"
            },
            "C": {
                "text": "Safety zone"
            },
            "D": {
                "text": "Parking"
            }
        },
        "picture": "128.png",
        "correctAnswerId": "C"
    },
    {
        "id": 129,
        "text": "How many days have to report when the driwer move his car?",
        "answers": {
            "A": {
                "text": "30 days"
            },
            "B": {
                "text": "15 days"
            },
            "C": {
                "text": "25 days"
            },
            "D": {
                "text": "20 days"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 130,
        "text": "Do not allow the driver to overtake the car while having fog, dust, rain or smoke, that cannot be seen ahead, how many distance?",
        "answers": {
            "A": {
                "text": "60 meters"
            },
            "B": {
                "text": "90 meters"
            },
            "C": {
                "text": "70 meters"
            },
            "D": {
                "text": "80 meters"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 131,
        "text": "At the intersection which have no U-turn sign, but the traffic office permits to make a U-turn. What should the driver do?",
        "answers": {
            "A": {
                "text": "Can U-turn"
            },
            "B": {
                "text": "Can make a U-turn, if there is no sign for U-turn"
            },
            "C": {
                "text": "Cannot make a U-turn"
            },
            "D": {
                "text": "Can make a U-turn, if it not an intersection"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 132,
        "text": "Which emergency light can be turned on correctly?",
        "answers": {
            "A": {
                "text": "Broken car or accident"
            },
            "B": {
                "text": "Turn on anytime"
            },
            "C": {
                "text": "Misty"
            },
            "D": {
                "text": "Pass Junction"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 133,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": ", Do not make a U-turn to the right"
            },
            "C": {
                "text": "Make a U-turn to the left"
            },
            "B": {
                "text": "Do not turn the car to the left"
            },
            "D": {
                "text": "Make a U-turn to the right"
            }
        },
        "picture": "133.png",
        "correctAnswerId": "A"
    },
    {
        "id": 134,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Make a U-turn to the left"
            },
            "B": {
                "text": "Do not make a U-turn to the right"
            },
            "D": {
                "text": "Make a U-turn to the right"
            }
        },
        "picture": "134.png",
        "correctAnswerId": "B"
    },
    {
        "id": 135,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Turn left"
            },
            "B": {
                "text": "Do not turn left"
            },
            "C": {
                "text": "Mandatory Area done"
            },
            "D": {
                "text": "Use speed"
            }
        },
        "picture": "135.png",
        "correctAnswerId": "C"
    },
    {
        "id": 136,
        "text": "What should you do when see this sign? (Exit to frontage road)",
        "answers": {
            "A": {
                "text": "Drivers on the main road be careful. Prepare to get out the main way."
            },
            "B": {
                "text": "Drivers on the main road be careful. Prepare to exit to the left bend."
            },
            "C": {
                "text": "Drivers on the main road be careful. Getting out on the right curve."
            },
            "D": {
                "text": "The driver on the parallel path prepares to enter the main path."
            }
        },
        "picture": "136.png",
        "correctAnswerId": "D"
    },
    {
        "id": 137,
        "text": "What should you do when see this sign?",
        "answers": {
            "A": {
                "text": "Drivere on the main path, prepare to go to parallel. Drivers on the parallel path are careful of vehicles coming in the same direction."
            },
            "B": {
                "text": "Drivers in the main way prepare to enter the curve start from left"
            },
            "C": {
                "text": "Drivers in the main way prepare to exit the curve start from left"
            },
            "D": {
                "text": "Drivers in the main way prepare to exit the curve start from right"
            }
        },
        "picture": "137.png",
        "correctAnswerId": "A"
    },
    {
        "id": 138,
        "text": "What should you do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive slowly and be careful about the way ahead, there may be danger such as and accident or collapses."
            },
            "B": {
                "text": "Drive slow and be especially careful with students."
            },
            "C": {
                "text": "Drive slowly and be careful with animals"
            },
            "D": {
                "text": "Drive slowly and be especially careful with people crossing the road"
            }
        },
        "picture": "138.png",
        "correctAnswerId": "A"
    },
    {
        "id": 139,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Cannot overtake area"
            },
            "B": {
                "text": "Can overtake area"
            },
            "C": {
                "text": "Give the way area"
            },
            "D": {
                "text": "Stop area"
            }
        },
        "picture": "139.png",
        "correctAnswerId": "A"
    },
    {
        "id": 140,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Alternate (Zip)"
            },
            "B": {
                "text": "The curve turns back to the left"
            },
            "C": {
                "text": "The curve turns back right"
            },
            "D": {
                "text": "Left curve"
            }
        },
        "picture": "140.png",
        "correctAnswerId": "A"
    },
    {
        "id": 141,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Rough surface"
            },
            "B": {
                "text": "Open bridge"
            },
            "C": {
                "text": "Warning car jump"
            },
            "D": {
                "text": "Basin"
            }
        },
        "picture": "141.png",
        "correctAnswerId": "B"
    },
    {
        "id": 142,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Intersection ahead with a roundabout"
            },
            "C": {
                "text": "The way ahead is a narrow path"
            },
            "B": {
                "text": "The way ahead is an intersection"
            },
            "D": {
                "text": "The way ahead is the intersection"
            }
        },
        "picture": "142.png",
        "correctAnswerId": "A"
    },
    {
        "id": 143,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Main road merged Y-shape"
            },
            "B": {
                "text": "Main road merged T shape"
            },
            "C": {
                "text": "Main road merged secondary road Y-shape"
            },
            "D": {
                "text": "Main road and secondary road separate at opposite side start left"
            }
        },
        "picture": "143.png",
        "correctAnswerId": "D"
    },
    {
        "id": 144,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Secondary road separate at opposite side start right"
            },
            "B": {
                "text": "Intersection Y-shape"
            },
            "C": {
                "text": "Intersection T-shape"
            },
            "D": {
                "text": "Main road merged secondary road Y-shape"
            }
        },
        "picture": "144.png",
        "correctAnswerId": "A"
    },
    {
        "id": 145,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Do not go left or right"
            },
            "B": {
                "text": "Keep left or right"
            },
            "C": {
                "text": "Keep right only"
            },
            "D": {
                "text": "Keep left only"
            }
        },
        "picture": "145.png",
        "correctAnswerId": "B"
    },
    {
        "id": 146,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Turn left"
            },
            "B": {
                "text": "Turn right"
            },
            "C": {
                "text": "Keep right"
            },
            "D": {
                "text": "Must drive to the left of the sigh"
            }
        },
        "picture": "146.png",
        "correctAnswerId": "D"
    },
    {
        "id": 147,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Must drive to the right of the sign"
            },
            "B": {
                "text": "Keep left"
            },
            "C": {
                "text": "Turn left"
            },
            "D": {
                "text": "Turn right"
            }
        },
        "picture": "147.png",
        "correctAnswerId": "A"
    },
    {
        "id": 148,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Road ahead is a one-way traffic only to the left"
            },
            "C": {
                "text": "Do not drive to the left"
            },
            "B": {
                "text": "Only go to the left"
            },
            "D": {
                "text": "Only drive to the right"
            }
        },
        "picture": "148.png",
        "correctAnswerId": "A"
    },
    {
        "id": 149,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Drive straight only"
            },
            "B": {
                "text": "Only drive to the left"
            },
            "C": {
                "text": "Do not drive to the right"
            },
            "D": {
                "text": "The driver must drive to the right of the sign"
            }
        },
        "picture": "149.png",
        "correctAnswerId": "D"
    },
    {
        "id": 150,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Turn left or right"
            },
            "B": {
                "text": "Do not turn left or right"
            },
            "C": {
                "text": "Do not straight or turn left"
            },
            "D": {
                "text": "Do not straigth or turn right"
            }
        },
        "picture": "150.png",
        "correctAnswerId": "A"
    },
    {
        "id": 151,
        "text": "If you are driving into a roundabout, the truck is turning signal to the left but it slightly move to the right what should you do?",
        "answers": {
            "A": {
                "text": "Keep the distance"
            },
            "B": {
                "text": "Give the horn signsl"
            },
            "C": {
                "text": "Overtake to the left"
            },
            "D": {
                "text": "Follow the truck"
            }
        },
        "picture": "151.png",
        "correctAnswerId": "A"
    },
    {
        "id": 152,
        "text": "What is the proper and good manner of use the high beam light?",
        "answers": {
            "A": {
                "text": "Turn on the high beam to check road conditions and roadside. Only for very dark paths and no vehicles running in front or in opposite direction and turn off the high beam asap there is a car running in front or opposite."
            },
            "B": {
                "text": "Turn on the high beam instead of head lights when running on a provincial road without electricity on both sides of the road and you can see the front lights of the car in front."
            },
            "C": {
                "text": "Turn on the high beam every time when running into a very dark bend and a car running in fromt or opposite"
            },
            "D": {
                "text": "Always turn on the high beam when driving uphill or downhill which have no light along the road and can see the headlights or the car in opposite direction."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 153,
        "text": "When the accident and the injury happens, what should the driver consider first?",
        "answers": {
            "A": {
                "text": "Mocing the car from the area"
            },
            "B": {
                "text": "Helping the injured"
            },
            "C": {
                "text": "Waiting for insurrance"
            },
            "D": {
                "text": "Waiting to see the police"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 154,
        "text": "What should the driver so when drove through water?",
        "answers": {
            "A": {
                "text": "SloW down but slightly accelerated the engine."
            },
            "B": {
                "text": "Emergency light on"
            },
            "C": {
                "text": "Drive at higher speeds"
            },
            "D": {
                "text": "Drive at normal speed"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 155,
        "text": "What should you do while driving through the flooded area?",
        "answers": {
            "A": {
                "text": "Arrive slowly behind the front car at a reasonable distance."
            },
            "B": {
                "text": "Absolutely not use the brakes"
            },
            "C": {
                "text": "Always drive close to the front car"
            },
            "D": {
                "text": "Emergency light on all the time"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 156,
        "text": "After driving through the flooded area, which of the following should you test?",
        "answers": {
            "A": {
                "text": "Engine starting system"
            },
            "B": {
                "text": "Electrical system"
            },
            "C": {
                "text": "Brake system"
            },
            "D": {
                "text": "Suspension systern"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 157,
        "text": "When you drive through a flooded road, what should you do?",
        "answers": {
            "A": {
                "text": "Stop the car, wait for the brake pad to dry."
            },
            "B": {
                "text": "Stop the car, check the tires"
            },
            "C": {
                "text": "Press the brake pedal to dry the brake pads quickly"
            },
            "D": {
                "text": "Drive faster to dry the brake pads."
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 158,
        "text": "How to graps the steering wheel?",
        "answers": {
            "A": {
                "text": "All 5 fingers hold the steering wheel tightly, can be rotated flexibly"
            },
            "B": {
                "text": "All 5 fingers hold the steering wheel as tightly as possible"
            },
            "C": {
                "text": "All 5 fingers touch the steering wheel, can tuen it with one hand"
            },
            "D": {
                "text": "Use the thumb and index finger to hold the steering wheel for just 2 fingers"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 159,
        "text": "While driving up hill if the engine turned off, what shoul you do?",
        "answers": {
            "A": {
                "text": "Press the brake pedal, pull the hand brake, change gear to nertral and restart the engine."
            },
            "B": {
                "text": "Press the brake pedal, pull the hand brake, and restart the engine."
            },
            "C": {
                "text": "Change to the low gear, pull the hand brake and restart the engine"
            },
            "D": {
                "text": "Let the car move and control the car."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 160,
        "text": "What you should not do while driving in the rain?",
        "answers": {
            "A": {
                "text": "Turn on the wiper"
            },
            "B": {
                "text": "Turn on the emergency light"
            },
            "D": {
                "text": "Reduce the speed"
            },
            "C": {
                "text": "Drive more carefully"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 161,
        "text": "After the accendent happened, what should the driver do?",
        "answers": {
            "A": {
                "text": "Call the rescue"
            },
            "B": {
                "text": "Call the police"
            },
            "C": {
                "text": "Call the insurance"
            },
            "D": {
                "text": "Give the signal to warn the other car"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 162,
        "text": "What kind of parking may cause an accicent?",
        "answers": {
            "A": {
                "text": "Poubble parking"
            },
            "B": {
                "text": "Park the car on the left side of the road"
            },
            "C": {
                "text": "Park the car in the parking lot"
            },
            "D": {
                "text": "Parking in the parking building"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 163,
        "text": "Which one does not result in the longer stopping distance (braking distance)?",
        "answers": {
            "A": {
                "text": "Road surface"
            },
            "B": {
                "text": "Loading weight"
            },
            "C": {
                "text": "Lubricant"
            },
            "D": {
                "text": "Car speed"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 164,
        "text": "What is the fuction of a car battery?",
        "answers": {
            "A": {
                "text": "Store electricity and supply electricity"
            },
            "B": {
                "text": "Take the engine off"
            },
            "C": {
                "text": "Cur off the power"
            },
            "D": {
                "text": "responsible for generating electricity in cars"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 165,
        "text": "What does the starter do?",
        "answers": {
            "A": {
                "text": "Makes the steering wheel well"
            },
            "B": {
                "text": "Cause the engine start"
            },
            "C": {
                "text": "Makes the brake system to work better"
            },
            "D": {
                "text": "Making the air conditioner in the car cooler"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 166,
        "text": "Which is cored?",
        "answers": {
            "A": {
                "text": "Lubricant oil should not be add to the fuel"
            },
            "B": {
                "text": "Refueling should be done during the day time"
            },
            "C": {
                "text": "We cannot refill the octane 95 instead of octane 91"
            },
            "D": {
                "text": "Expensive oil is the best oil"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 167,
        "text": "What is the Attitude and consciousness of driving safely of drivers?",
        "answers": {
            "A": {
                "text": "Drrive slowly, calm down"
            },
            "B": {
                "text": "Drive well"
            },
            "C": {
                "text": "Drive with consciousness, strict to the traffic discipline, show good manners and kindness"
            },
            "D": {
                "text": "Drive well, no accidents"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 168,
        "text": "What the car n (gray color) have to do if he want to go straight.",
        "answers": {
            "A": {
                "text": "Stop and wait for the (green) go first"
            },
            "B": {
                "text": "Can drive right away"
            },
            "C": {
                "text": "Stop and wait for the (blue) go first"
            },
            "D": {
                "text": "Stop and wait for (green and blue) go first"
            }
        },
        "picture": "168.png",
        "correctAnswerId": "D"
    },
    {
        "id": 169,
        "text": "What the driver should do?",
        "answers": {
            "A": {
                "text": "Cannot stop but can park"
            },
            "B": {
                "text": "Every kind of car cannot park except the private car"
            },
            "C": {
                "text": "Every kind of car cannot stop and park"
            },
            "D": {
                "text": "Cannot park but can stop for a while"
            }
        },
        "picture": "169.png",
        "correctAnswerId": "C"
    },
    {
        "id": 170,
        "text": "Which car have the priority to go first?",
        "answers": {
            "A": {
                "text": "(orange) can go cause it come from the secondary road"
            },
            "B": {
                "text": "(pink) can go cause it come from the main road"
            },
            "C": {
                "text": "(orange) can go cause it come from main road"
            },
            "D": {
                "text": "(pink) can go cause it come from the secondary road"
            }
        },
        "picture": "170.png",
        "correctAnswerId": "B"
    },
    {
        "id": 171,
        "text": "What shold the n (red) do if he want to go straight?",
        "answers": {
            "A": {
                "text": "Stop and wait for the (gray) go first"
            },
            "B": {
                "text": "Drive close to the (green) to avoid gap"
            },
            "C": {
                "text": "Drive to park next to the (green) on the right side"
            },
            "D": {
                "text": "Drive follow the the (green)and turn on the emergency light"
            }
        },
        "picture": "171.png",
        "correctAnswerId": "A"
    },
    {
        "id": 172,
        "text": "At the intersection without the traffic light,b both car reach at the same time which car can go first?",
        "answers": {
            "A": {
                "text": "The car who reach first"
            },
            "B": {
                "text": "Both of them"
            },
            "C": {
                "text": "the (purple)"
            },
            "D": {
                "text": "the car (red)"
            }
        },
        "picture": "172.png",
        "correctAnswerId": "C"
    },
    {
        "id": 173,
        "text": "The driver want to turn right then there is a car come from the opposite direction, what should he do?",
        "answers": {
            "A": {
                "text": "Stop, let the car from the right pass first then can tUrn right"
            },
            "B": {
                "text": "Stop, wait for the car from the opposite direction pass then can turn right"
            },
            "C": {
                "text": "Can turn immediately"
            },
            "D": {
                "text": "Do not turn the car"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 174,
        "text": "If there are cars turning left and turning right at the same time, what should the driver do?",
        "answers": {
            "A": {
                "text": "Those who will turn left, can turn immediately"
            },
            "B": {
                "text": "Car going to turn left have to stop and give the way to the car who come from the right first"
            },
            "C": {
                "text": "Car going to turn right have to stop and give way to the car who come from the left first"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 175,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive one way on the left"
            },
            "B": {
                "text": "All kinds of cars drive on the right side of the roundabou"
            },
            "C": {
                "text": "Can drive pass in front of other cars in the round about"
            },
            "D": {
                "text": "All kinds of car must drive on the left side of the roundabout and wait for the car that drive aro the roundabout pass first"
            }
        },
        "picture": "175.png",
        "correctAnswerId": "D"
    },
    {
        "id": 176,
        "text": "Which is the function of engine oil?",
        "answers": {
            "A": {
                "text": "Cooling the heat from the radiator"
            },
            "B": {
                "text": "Exhaust heat from the engine"
            },
            "C": {
                "text": "Cooling the brake pads"
            },
            "D": {
                "text": "Clean the radiator"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 177,
        "text": "When should the brake fluid change?",
        "answers": {
            "A": {
                "text": "Should change every 3 months"
            },
            "B": {
                "text": "Should change every 6 months"
            },
            "C": {
                "text": "5hould change every 1 year"
            },
            "D": {
                "text": "Should change every time the engine oil is changed"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 178,
        "text": "what should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Can over take other cars in the area marked with this symbol"
            },
            "B": {
                "text": "Giving way to other cars first in the area marked with this symbol"
            },
            "C": {
                "text": "Stop first in the area marked with this symbol"
            },
            "D": {
                "text": "Do not over take in the area marked with this symbol"
            }
        },
        "picture": "178.png",
        "correctAnswerId": "D"
    },
    {
        "id": 179,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "AII kind of vehicles do not entry"
            },
            "C": {
                "text": "Allowing only private car entry"
            },
            "B": {
                "text": "People can entry"
            },
            "D": {
                "text": "Allow all car entry"
            }
        },
        "picture": "179.png",
        "correctAnswerId": "A"
    },
    {
        "id": 180,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Do not change the lane to the right"
            },
            "C": {
                "text": "Do not change the lane to the left"
            },
            "B": {
                "text": "Change the lane to the right"
            },
            "D": {
                "text": "To change the lane to the left"
            }
        },
        "picture": "180.png",
        "correctAnswerId": "A"
    },
    {
        "id": 181,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Do not change the lane to the right"
            },
            "B": {
                "text": "Change the lane to the right"
            },
            "C": {
                "text": "Do not change the lane to the left"
            },
            "D": {
                "text": "To change the lane to the left"
            }
        },
        "picture": "181.png",
        "correctAnswerId": "C"
    },
    {
        "id": 182,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Do not turn right or U-turn"
            },
            "C": {
                "text": "Turn right or U-turn"
            },
            "B": {
                "text": "Turn left or U-turn"
            },
            "D": {
                "text": "Do not turn left or U-turn"
            }
        },
        "picture": "182.png",
        "correctAnswerId": "A"
    },
    {
        "id": 183,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Do not turn left or U-turn"
            },
            "C": {
                "text": "Turn left or turn right"
            },
            "B": {
                "text": "Turn left or U-turn"
            },
            "D": {
                "text": "Do not turn left or turn right"
            }
        },
        "picture": "183.png",
        "correctAnswerId": "A"
    },
    {
        "id": 184,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": ": Straight but do not timteft"
            },
            "B": {
                "text": "Do not straight or turn left"
            },
            "C": {
                "text": "Straight or turn left"
            },
            "D": {
                "text": "Do not straight or turn right"
            }
        },
        "picture": "184.png",
        "correctAnswerId": "C"
    },
    {
        "id": 185,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Straight or turn right"
            },
            "B": {
                "text": "Do not straight or turn left"
            },
            "C": {
                "text": "Do not straight or turn right"
            },
            "D": {
                "text": "Straight or turn left"
            }
        },
        "picture": "185.png",
        "correctAnswerId": "A"
    },
    {
        "id": 186,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive slowly and keep right. Drive in a reverse curve with a narrow radius start left"
            },
            "B": {
                "text": "Drive slowly and more careful"
            },
            "C": {
                "text": "Drive slowly and keep left. Drive in a straight curve turn right."
            },
            "D": {
                "text": "Drive slowly and keep right. Drive along the curve road to the left"
            }
        },
        "picture": "186.png",
        "correctAnswerId": "B"
    },
    {
        "id": 187,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Slow down and more careful, the road ahead separate to the left"
            },
            "B": {
                "text": "Drive carefully, the road ahead is the intersection T-shape"
            },
            "C": {
                "text": "Drive carefully, the road ahead is the main road merged main road T-shape"
            },
            "D": {
                "text": "Drive carefully, the road ahead is the Y-intersection"
            }
        },
        "picture": "187.png",
        "correctAnswerId": "A"
    },
    {
        "id": 188,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "5Iow down and more careful, the road ahead had subsidiary road to the right"
            },
            "B": {
                "text": "Drive carefully, main road separate to the right"
            },
            "C": {
                "text": "Drive carefully, subsidiary road to the right"
            },
            "D": {
                "text": "Drive carefully, main road separate to the left"
            }
        },
        "picture": "188.png",
        "correctAnswerId": "A"
    },
    {
        "id": 189,
        "text": "What is this S‘en mean?",
        "answers": {
            "A": {
                "text": "Main road merged subsidiary road T-shape"
            },
            "B": {
                "text": "Main road merged main road Y-shape"
            },
            "C": {
                "text": "subsidiary road merged main road from left"
            },
            "D": {
                "text": "Main road merged T-shape"
            }
        },
        "picture": "189.png",
        "correctAnswerId": "C"
    },
    {
        "id": 190,
        "text": "What is this Sign mean?",
        "answers": {
            "A": {
                "text": "subsidiary road merged main road from right"
            },
            "B": {
                "text": "subsidiary road merged subsidiary road from left"
            },
            "C": {
                "text": "subsidiary road merged main road from left"
            },
            "D": {
                "text": "Main road merged main road from left"
            }
        },
        "picture": "190.png",
        "correctAnswerId": "A"
    },
    {
        "id": 191,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Main road separate main road from left Y-shape"
            },
            "B": {
                "text": "subsidiary road separate main road from left Y-shape"
            },
            "C": {
                "text": "subsidiary road separate subsidiary road from left Y-shape"
            },
            "D": {
                "text": "subsidiary road separate main road from right Y-shape"
            }
        },
        "picture": "191.png",
        "correctAnswerId": "B"
    },
    {
        "id": 192,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "subsidiary road separate main road from left Y-shape"
            },
            "B": {
                "text": "Main road separate main road from left Y-shape"
            },
            "C": {
                "text": "subsidiary road separate main road from right Y-shape"
            },
            "D": {
                "text": "subsidiary road separate subsidiary road from left Y-shape"
            }
        },
        "picture": "192.png",
        "correctAnswerId": "C"
    },
    {
        "id": 193,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Narrow road both sides"
            },
            "B": {
                "text": "Narrow road right side"
            },
            "C": {
                "text": "Narrow road left side"
            },
            "D": {
                "text": "Wider road both sides"
            }
        },
        "picture": "193.png",
        "correctAnswerId": "C",
    },
    {
        "id": 194,
        "text": "What is this sign mean?",
        "answers": {
            "A": {
                "text": "Narrow road right side"
            },
            "B": {
                "text": "Narrow road both sides"
            },
            "C": {
                "text": "Narrow road left side"
            },
            "D": {
                "text": "Wider road both sides"
            }
        },
        "picture": "194.png",
        "correctAnswerId": "A"
    },
    {
        "id": 195,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Prive slowly and careful of danger from the road gravel may slipping off"
            },
            "B": {
                "text": "Drive slowly and careful of falling rocks"
            },
            "C": {
                "text": "Drive slowly and careful of slippery roads"
            },
            "D": {
                "text": "Drive slowly and careful of the curve"
            }
        },
        "picture": "195.png",
        "correctAnswerId": "A"
    },
    {
        "id": 196,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive slowly and careful about the falling rocks the road ahead obstruct traffic"
            },
            "B": {
                "text": "Drive slowly and more careful for the steep hill ascent"
            },
            "C": {
                "text": "Drive slowly and more careful for the steep hill descent"
            },
            "D": {
                "text": "Drive slowly and more careful for narrow road"
            }
        },
        "picture": "196.png",
        "correctAnswerId": "A"
    },
    {
        "id": 197,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive slowly and more careful, road ahead other cars may join in the same direction from left"
            },
            "B": {
                "text": "Drive slowly and careful, road ahead with right curve"
            },
            "C": {
                "text": "Drive slowly and careful, road ahead with the narrow curve left"
            },
            "D": {
                "text": "Drive slowly and careful, road ahead with the curve left"
            }
        },
        "picture": "197.png",
        "correctAnswerId": "A"
    },
    {
        "id": 198,
        "text": "What should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Drive slowly and more careful, road ahead other cars may join in the same direction from right"
            },
            "B": {
                "text": "Drive slowly and more careful, road ahead other cars may join from left"
            },
            "C": {
                "text": "Drive slowly and more careful, there is a double way ahead"
            },
            "D": {
                "text": "Drive slowly and more careful, there will be an intersection ahead"
            }
        },
        "picture": "198.png",
        "correctAnswerId": "A"
    },
    {
        "id": 199,
        "text": "What Should the driver do when see this sign?",
        "answers": {
            "A": {
                "text": "Slowly drive near the edge of the road and careful of the car from opposite direction"
            },
            "B": {
                "text": "Slowly drive and keep left the road ahead Is a one way road"
            },
            "C": {
                "text": "Drive and keep left the road ahead has one way traffic on the left"
            },
            "D": {
                "text": "Drive and keep left the road ahead has one way traffic on the left"
            }
        },
        "picture": "199.png",
        "correctAnswerId": "A"
    },
    {
        "id": 200,
        "text": "If the air in the front left tire is weak, how will it affect when driving",
        "answers": {
            "A": {
                "text": "Uneven abrasion on the rear wheels"
            },
            "B": {
                "text": "The car consumes less fuel than usual"
            },
            "C": {
                "text": "Steering wheel slightly right"
            },
            "D": {
                "text": "Steering wheel slightly left"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 201,
        "text": "Which tire checking is correct?",
        "answers": {
            "A": {
                "text": "1 month"
            },
            "B": {
                "text": "2 months"
            },
            "C": {
                "text": "3 months"
            },
            "D": {
                "text": "At least once a week"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 202,
        "text": "Which tire inflation is correct?",
        "answers": {
            "A": {
                "text": "Inflate when it still hot"
            },
            "B": {
                "text": "should inflate while it still cool"
            },
            "C": {
                "text": "Should inflate the tires very hard"
            },
            "D": {
                "text": "should inflate the tires very soft"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 203,
        "text": "How many distance should switch the tires?",
        "answers": {
            "A": {
                "text": "10,000 km"
            },
            "B": {
                "text": "25,000 km"
            },
            "C": {
                "text": "30,000 km"
            },
            "D": {
                "text": "35,000 km"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 204,
        "text": "Which is the driver should not do?",
        "answers": {
            "A": {
                "text": "Slow drive, keep right"
            },
            "B": {
                "text": "Fast drive, keep right"
            },
            "C": {
                "text": "Slow drive, keep left"
            },
            "D": {
                "text": "All correct"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 205,
        "text": "Which is the situation that can turn on the high beam?",
        "answers": {
            "A": {
                "text": "Turn on the high beam to see the signs or the road ahead occasionally"
            },
            "B": {
                "text": "Turn on the high beam while there is a car in front or have a car coming from opposite direction"
            },
            "C": {
                "text": "Turn on the high beam when dissatisfied the front car and let the driver know"
            },
            "D": {
                "text": "Turn on the high beam to let the other drivers know that you will drive fast and get out of the way"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 206,
        "text": "What should you do when park your car in front of the other car?",
        "answers": {
            "A": {
                "text": "Pull the handbrake on"
            },
            "B": {
                "text": "Park with neutral, do not use the handbrake"
            },
            "C": {
                "text": "Put forward gear position"
            },
            "D": {
                "text": "Put the reverse gear position"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 207,
        "text": "How much the alcohol level is allow to drive?",
        "answers": {
            "A": {
                "text": "Not more than 60 mg percent"
            },
            "C": {
                "text": "Not more than 50 mg percent"
            },
            "B": {
                "text": "Not more than 70 mg percent"
            },
            "D": {
                "text": "Not more than 80 mg percent"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 208,
        "text": "Which of the following sentence is correct?",
        "answers": {
            "A": {
                "text": "Motorcycle must ride in the left lane"
            },
            "B": {
                "text": "The mass transportation bus must drive in the far right lane"
            },
            "C": {
                "text": "The truck must drive in the far right lane"
            },
            "D": {
                "text": "Changing the lane to the right or left do not look at the left or right mirror"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 209,
        "text": "What are the most important factors that cause road accidents?",
        "answers": {
            "A": {
                "text": "Car driver"
            },
            "B": {
                "text": "Road condition"
            },
            "C": {
                "text": "Car condition"
            },
            "D": {
                "text": "Environment"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 210,
        "text": "What is the driver etiquette?",
        "answers": {
            "A": {
                "text": "Drive on the opposite site on the road shoulder"
            },
            "B": {
                "text": "Overtake the queue"
            },
            "D": {
                "text": "Change lanes without the signal"
            }
        },
        "correctAnswerId": "B"
    },
    {
        "id": 211,
        "text": "What is the cause of accident?",
        "answers": {
            "A": {
                "text": "People"
            },
            "B": {
                "text": "People, Car"
            },
            "C": {
                "text": "People, Car, Road"
            },
            "D": {
                "text": "People, Car, Road, Environment"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 212,
        "text": "How long does it take to get a new license if yours is damaged or lost",
        "answers": {
            "A": {
                "text": "20 days"
            },
            "B": {
                "text": "30 days"
            },
            "C": {
                "text": "15 days"
            },
            "D": {
                "text": "45 days"
            }
        },
        "correctAnswerId": "D"
    },
    {
        "id": 213,
        "text": "What is the penalty of using the expired driver license?",
        "answers": {
            "A": {
                "text": "Fined not more than 5,000 Baht"
            },
            "B": {
                "text": "Jail not more than 3 months"
            },
            "C": {
                "text": "Fined not more than 2,000 Baht"
            },
            "D": {
                "text": "Jail not more than 1 month"
            }
        },
        "correctAnswerId": "C"
    },
    {
        "id": 214,
        "text": "Which is incorrect time of using the clutch.",
        "answers": {
            "A": {
                "text": "While doing down a steep hill."
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 215,
        "text": "To hold the steering wheel while driving straight, what is the position or tne left and right hand according to the clock face?",
        "answers": {
            "A": {
                "text": "Position number 2 and 10"
            },
            "B": {
                "text": "Position number 4 and 10"
            },
            "C": {
                "text": "Position number 3 and 10"
            },
            "D": {
                "text": "Position number 6 and 10"
            }
        },
        "correctAnswerId": "A"
    },
    {
        "id": 216,
        "text": "If the car engine is turned off while moving off the slope, what should you do first?",
        "answers": {
            "A": {
                "text": "Immediately brake to prevent the car from moving"
            },
            "B": {
                "text": "Switch to the neutral gear position"
            },
            "C": {
                "text": "Restart"
            },
            "D": {
                "text": "Turn the emergency light on"
            }
        },
        "correctAnswerId": "A"
    }
]
