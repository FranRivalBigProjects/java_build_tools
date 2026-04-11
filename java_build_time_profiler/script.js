function analyze(){
let input=document.getElementById('input').value||"";
let notes="";

// maven deps
if(input.includes("<dependency>") || input.includes("pom.xml")){
  notes += "Maven dependencies detected.\n";
}

// gradle
if(input.includes("dependencies {") || input.includes("build.gradle")){
  notes += "Gradle build detected.\n";
}

// conflict
if(input.includes("version") && input.match(/:\d/)){
  notes += "Possible dependency version conflicts.\n";
}

// jar size
if(input.includes(".jar") || input.includes("size")){
  notes += "JAR artifact info detected.\n";
}

// build time
if(input.includes("BUILD SUCCESS") || input.includes("Time:")){
  notes += "Build log timing detected.\n";
}

if(!notes) notes="No build patterns detected.";

document.getElementById('result').innerText =
"Build Analysis:\n"+notes;
}
