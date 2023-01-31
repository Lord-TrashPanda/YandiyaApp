import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ //Export const
    container: {
      },
      image: {
       width: 282,
       height: 500,
       flex: 1,
      },
      image2: {
       width: 200,
       height: 200,
       position: 'absolute', top: -30, left: -60,
      },
       image3: {
       width: 250,
       height: 90,
       position: 'absolute', top: -20, left: 20,
       borderRadius: 100,
      },
      text: {
        color: 'white',
        fontSize: 18,
        lineHeight: 84,
        textAllign: 'right',
        position: 'absolute', top: -5, left: 50,
        fontWeight: "bold",
    },
    box1:{
        backgroundColor: "grey",
        width: 282,
        height: 20,
    },
    box2:{
        backgroundColor: "grey",
        width: 283,
        height: 21,
        position: 'absolute', top: 480, right: 1
    },
     box3:{
        backgroundColor: "grey",
        width: 260,
        height: 70,
        position: 'absolute', top: 100, right: 10,
        borderRadius: 20, 
    },
    box4:{
        backgroundColor: "grey",
        width: 260,
        height: 70,
        position: 'absolute', top: 200, right: 10,
        borderRadius: 20,
    },
    box5:{
        backgroundColor: "#5e1313",
        width: 270,
        height: 80,
        position: 'absolute', top: 30, right: 5,
        borderRadius: 100,
        color: "white"
    },
     text1: {
        fontSize: 12,
        position: 'absolute', top: 20, right: 40,
        fontWeight: "bold",
        color: "white",
     },
        home:{
        backgroundColor: "whitesmoke",
        width: 60,
        height: 60,
        position: 'absolute', top: 410, right: 5,
        borderRadius: 10,
      },
       files:{
        backgroundColor: "whitesmoke",
        width: 60,
        height: 60,
        position: 'absolute', top: 410, right: 75,
        borderRadius: 10,
      },
       client:{
        backgroundColor: "whitesmoke",
        width: 60,
        height:60,
        position: 'absolute', top: 410, right: 145,
        borderRadius: 10,
      },
       settings:{
        backgroundColor: "whitesmoke",
        width: 60,
        height: 60,
        position: 'absolute', top: 410, right: 215,
        borderRadius: 10,
      },
      inc:{
        color: 'white',
         position: 'absolute', top: 150, right: 50,
         fontSize: 18,
         fontWeight: "bold"
      },
      continue:{
      flex: 1, alignItems: 'center', justifyContent: 'center',
               position: 'absolute', top: 400, right: 90
      },
      Home:{
         flex: 1, alignItems: 'center', justifyContent: 'center',
               position: 'absolute', top: 460, right: 220
      }

})

export {styles}