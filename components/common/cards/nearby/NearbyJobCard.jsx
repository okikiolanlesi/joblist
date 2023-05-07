import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { checkImageURL } from "../../../../utils";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
