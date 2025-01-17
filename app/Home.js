import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

function ProfileHeader() {
  return (
    <View style={styles.profileContainer}>
      <Image source={require("./Assets/person.jpg")} style={styles.Person} />
      <View style={styles.profileText}>
        <Text style={styles.heyName}>Hey Name</Text>
        <Text style={styles.letsGetStarted}>Let's Get Started</Text>
      </View>
    </View>
  );
}

function ProgressBar(props) {
  const { progressValue } = props;

  const progressBarWidth = Math.max(0, Math.min(100, progressValue)) + "%";

  return (
    <View style={styles.progress}>
      <View style={styles.progressContent}>
        <Text style={styles.progressText}>{props.progressText}</Text>
        <Text style={styles.courseName}>{props.courseName}</Text>
        <View
          style={[
            styles.progressBarFill,
            { width: progressBarWidth, height: 15 },
          ]}
        />
        <Pressable style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
      <View>
        <Image
          source={require("./Assets/3d-art-illution.jpg")}
          style={styles.ProgressBar1_Image}
        />
      </View>
    </View>
  );
}

function CourseGridItem(props) {
  return (
    <View
      style={[
        styles.courseGridContainer,
        {
          backgroundColor: props.clr,
          marginRight: props.isLastInRow ? 2 : 1,
          marginLeft: props.isFirstInRow ? 2 : 1,
        },
      ]}
    >
      <View style={styles.courseGridBox}>
        <View style={styles.courseContent}>
          <Text style={styles.courseNameText}>{props.courseName}</Text>
          <Text style={styles.doneClasses}>{props.doneClasses}</Text>
          <View style={styles.buttonAndImageContainer}>
            <Pressable style={styles.playButton}>
              <Image
                source={require("./Assets/arrow.png")}
                style={styles.playIcon}
              ></Image>
            </Pressable>
            <Image
              source={require("./Assets/ui-ux.jpg")}
              style={styles.ProgressGridImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

function Home() {
  const headerAndProgressHeight = 250;
  const availableHeight = windowHeight - headerAndProgressHeight;

  const [progressPercentage, setProgressPercentage] = useState(0);

  const updateProgress = (newPercentage) => {
    const validatedPercentage = Math.max(0, Math.min(100, newPercentage));
    setProgressPercentage(validatedPercentage);
  };

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View>
        <ProgressBar
          progressText="Your Progress"
          courseName="Intro to React Native"
          progressValue={progressPercentage}
        />
        <Text style={styles.chooseCourseText}>Choose Your Course</Text>
      </View>

      <View style={[styles.courseGridsContainer, { height: availableHeight }]}>
        <View style={styles.courseGridRow}>
          <CourseGridItem
            clr="skyblue"
            courseName="UX/UI"
            doneClasses="10/20"
            isFirstInRow={true}
            isLastInRow={false}
          />
          <CourseGridItem
            clr="lightgreen"
            courseName="Web Dev"
            doneClasses="5/15"
            isFirstInRow={false}
            isLastInRow={true}
          />
        </View>
        <View style={styles.courseGridRow}>
          <CourseGridItem
            clr="lightcoral"
            courseName="Data Science"
            doneClasses="8/25"
            isFirstInRow={true}
            isLastInRow={false}
          />
          <CourseGridItem
            clr="gold"
            courseName="TEST NAME"
            doneClasses="12/30"
            isFirstInRow={false}
            isLastInRow={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  Person: {
    borderRadius: 75,
    width: 75,
    height: 75,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 50,
    borderRadius: 10,
    alignItems: "center",
    padding: 15,
  },
  profileText: {
    marginLeft: 15,
    flex: 1,
  },
  heyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  letsGetStarted: {
    fontSize: 16,
    color: "#555",
  },
  progress: {
    backgroundColor: "#4a90e2",
    width: "100%",
    borderRadius: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    padding: 10,
  },
  progressContent: {
    padding: 10,
  },
  progressText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  courseName: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  continueButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  continueButtonText: {
    color: "#4a90e2",
    textAlign: "center",
    fontWeight: "bold",
  },
  progressBarFill: {
    height: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  ProgressBar1_Image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  courseGridsContainer: {
    flex: 1,
  },
  courseGridRow: {
    flexDirection: "row",
  },
  courseGridContainer: {
    flex: 1,
    marginVertical: 2,
    borderRadius: 10,
    borderColor: "#ddd",
    height: 145,
  },
  chooseCourseText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    color: "#333",
  },
  courseGridBox: {
    padding: 10,
    flex: 1,
  },
  courseContent: {
    flex: 1,
    justifyContent: "space-around",
  },
  courseNameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  doneClasses: {
    fontSize: 14,
    color: "#777",
  },
  buttonAndImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playButton: {
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  ProgressGridImage: {
    width: windowWidth < 400 ? 60 : 75,
    height: windowWidth < 400 ? 60 : 75,
    borderRadius: 10,
  },
  playIcon: {
    width: 25,
    height: 25,
  },
});

export default Home;