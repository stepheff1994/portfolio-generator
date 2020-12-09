
const profileDataArgs = process.argv.slice(2, process.argv.length);








const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
  };
// const printProfileData = profileDatarr => console.log(profileDatarr)


printProfileData(profileDataArgs)