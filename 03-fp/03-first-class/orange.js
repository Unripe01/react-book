let frinedship;

if (true) {
  const he = 'Kakeru';
  const saveHim = () => {
    console.log(`${he} saved`);
  };
  //クロージャーの実験
  //GCに殺されないように外からの参照を残してやる・・・
  frinedship = saveHim;
}

 frinedship();
