from collections import Counter
from sklearn.neighbors import NearestNeighbors
import pandas as pd
import random
import joblib

# Set num of students
Majors = ["Mechatronic","Mechanical","Software","Electrical"]
Faculty = "Engineering"
student_data = []

credit_blocks = {
    (0, 24): {
       "Software Engineering":["Mathematics one", "Introduction to Engineering Projects", "Business Requirements Modelling", "Programming 1"],
       "Mechatronic Engineering":["Mathematics one","Introduction to Engineering Projects","Introduction to Mechanical Engineering","Physical Modelling"],
       "Electrical Engineering":["Mathematics one","Fundamentals of C Programming","Introduction to Electrical and Electronic Engineering","Physical Modelling"],
       "Mechanical Engineering":["Mathematics one","Introduction to Engineering Projects"," Introduction to Mechanical Engineering","Physical Modelling"]
      },
    (25, 48): {
        "Software Engineering":["Mathematics two", "Programming two", "Systems Testing and Quality Management", "Database Fundamentals"],
        "Mechatronic Engineering":["Materials and Manufacturing Engineering A","Applied Mechanics and Design A","Introduction to Mechatronics Engineering","Programming 1"],
        "Electrical Engineering":["Mathematics two","Introduction to Engineering Projects","Foundations of Electrical and Electronic Technology","Electronics and Circuits"],
        "Mechanical Engineering":["Materials and Manufacturing Engineering A","Applied Mechanics and Design A","Introduction to Mechatronics Engineering","Engineering Computations"]
      },
    (49, 72): {
        "Software Engineering":["Professional Practice Preparation 1", "Physical Modelling", "Data Structures and Algorithms", "Information System Development Methodologies","Software Engineering Elective one"],
        "Mechatronic Engineering":["Mathematics Two","Embedded Mechatronics Systems","Machines and Mechanisms A","Mechanical Design Fundamentals Studio 1","Professional Practice Preparation 1"],
        "Electrical Engineering":["Engineering Project Appraisal","Introductory Digital Systems","Introductory Embedded Systems","Signals and Systems","Professional Practice Preparation 1"],
        "Mechanical Engineering":["Mathematics Two","Machines and Mechanisms A","Thermofluids A","Mechanical Design Fundamentals Studio 1","Professional Practice Preparation 1"]
      },
    (73, 96): {
        "Software Engineering":["Engineering Project Appraisal", "Software Design Studio", "Software Engineering Elective two"],
        "Mechatronic Engineering":["Engineering Project Appraisal","Industrial Robotics","Sensors and Control for Mechatronic Systems","Mechatronic Elective One"],
        "Electrical Engineering":["Designing Sustainable Engineering Projects","Electromechanical Automation","Circuit Analysis and Design","Control Design"],
        "Mechanical Engineering":["Engineering Project Appraisal","Applied Mechanics and Design B","Mechanical Elective One","Mechanical Elective Two"]
      },
    (97, 120): {
        "Software Engineering":["Designing Sustainable Engineering Projects", " Software Development Studio", "Software Engineering Elective Three"],
        "Mechatronic Engineering":["Designing Sustainable Engineering Projects","Programming for Mechatronic Systems","Embedded Mechatronics Studio","Dynamic Systems and Control A"],
        "Electrical Engineering":["Professional Engineering Communication","Power Electronics","Electrical Power Systems","Electrical Engineering Elective One"],
        "Mechanical Engineering":["Dynamic Systems and Control A","Thermofluids B","Machines and Mechanisms B","Mechanical Design Fundamentals Studio 2"]
      },
    (121, 144): {
        "Software Engineering":["Engineering Work Experience", "Professional Engineering Communication", "Software Analysis Studio", "Software Architecture"],
        "Mechatronic Engineering":["Professional Engineering Communication","Robotics Studio 1","Engineering Work Experience","Mechatronic Elective Two","Mechatronic Elective Three"],
        "Electrical Engineering":["Engineering Work Experience","Professional Studio A","Collaboration in Complex Projects","Electrical Engineering Elective Two","Electrical Engineering Elective Three"],
        "Mechanical Engineering":["Designing Sustainable Engineering Projects","Mechanical Systems Design Studio 1","Engineering Work Experience","Mechanical Elective Three","Mechanical Elective Four"]
      },
    (145, 168): {
        "Software Engineering":["Engineering Research Preparation", "Collaboration in Complex Projects", "Professional Experience Review", "Software Engineering Elective Four"],
        "Mechatronic Engineering":["Robotics Studio 2","Professional Experience Review","Engineering Research Preparation","Artificial Intelligence in Robotics","Mechatronic Elective Four"],
        "Electrical Engineering":["Professional Experience Review","Engineering Research Preparation","Professional Studio B","Electrical Engineering Elective Four","Elective One"],
        "Mechanical Engineering":["Mechanical Systems Design Studio 2","Professional Experience Review","Dynamic Systems and Control B","Engineering Research Preparation","Professional Engineering Communication"]
      },
    (169, 192): {
        "Software Engineering":["Engineering Capstone", "Software Innovation Studio", "Software Engineering Elective Five"],
        "Mechatronic Engineering":["Engineering Capstone","Design in Mechanical and Mechatronic System","Collaboration in Complex Projects","Software Engineering Elective Six"],
        "Electrical Engineering":["Engineering Capstone","Elective Two","Elective Three","Elective Four"],
        "Mechanical Engineering":["Engineering Capstone","Design in Mechanical and Mechatronic Systems","Mechanical Elective Five","Collaboration in Complex Projects"]
      }
    }


# Generate student data
def gen_data(num_students=10000):
    for student_id in range(1, num_students + 1):
        student_name = f"Student {student_id}"
        major = random.choice(["Software Engineering","Mechatronic Engineering","Electrical Engineering","Mechanical Engineering"])

        # Generate credit points in clumps of 6
        credit_points = random.randint(0, 15) * 6
        chosen_subjects = []
        for credit_range, subjects in credit_blocks.items():
            if credit_range[0] <= credit_points <= credit_range[1]:
                chosen_subject = random.choice(subjects[major])
                chosen_subjects.append(chosen_subject)
                break

        student_data.append([student_id, student_name, major, credit_points, chosen_subjects])


def train_model():
    # Create Dataframe
    columns = ["StudentID", "StudentName", "Course", "CreditPoints", "ChosenSubjects"]
    df = pd.DataFrame(student_data, columns=columns)
    # Choose Parameters
    X = df[['CreditPoints']]
    k = 5
    # Train model
    knn = NearestNeighbors(n_neighbors=k)
    knn.fit(X)
    return knn, X, df


def load_model():
    # Load the trained model from the file
    model = joblib.load("knn_model.pkl")
    return model


def recommend_courses(student_id, knn, X, df):
    # Find the index of the student with the given student_id
    student_idx = df[df['StudentID'] == student_id].index[0]

    # Find the nearest students' indices and find their chosen subjects
    distances, indices = knn.kneighbors(X.iloc[[student_idx]])
    nearest_students = df.iloc[indices[0]]

    # Combine the chosen subjects of the nearest students
    combined_subjects = []
    for _, student in nearest_students.iterrows():
        combined_subjects.extend(student['ChosenSubjects'])

    # Find the most common courses among the nearest students
    recommended_courses = [subject for subject, count in Counter(combined_subjects).most_common()]

    return recommended_courses

if __name__ == "__main__":
    # new_student_data = get_student_data()
    new_student_data = [3355,"John Doe","Mechatronic", 120, []]
    gen_data()
    student_data.append(new_student_data)
    knn, X, df = train_model()
    student_idx = 2003
    recommended_courses = recommend_courses(student_idx, knn, X, df)
    print(f"Recommended courses for Student {student_idx + 1}:")
    print(recommended_courses)
