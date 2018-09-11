import m from "mithril";

var starportQualityTable = {
    "A": {
        "quality":"Excelent",
        "berthingCost":"1d6*1000",
        "facilities":"Shipyard(all) and repair"
    } ,
    "B": {
        "quality":"Good",
        "berthingCost":"1d6*500",
        "facilities":"Shipyard(spaceCraft) and repair"
    } ,
    "C": {
        "quality":"Routine",
        "berthingCost":"1d6*100",
        "facilities":"Shipyard(smallCraft) and repair"
    } ,
    "D": {
        "quality":"Poor",
        "berthingCost":"1d6*10",
        "facilities":"Limited repair"
    } ,
    "E": {
        "quality":"Frontier",
        "berthingCost":"0",
        "facilities":"None"
    } ,
    "X": {
        "quality":"No Startport",
        "berthingCost":"0",
        "facilities":"None"
    } 
};

var sizeTable = {
    "zero":"800Km , negligible",
    "one":"1600Km , 0.05",
    "two":"3200Km , 0.15",
    "three":"4800Km , 0.25",
    "four":"6400Km , 0.35",
    "five":"8000Km , 0.45",
    "six":"4800Km , 0.7",
    "seven":"4800Km , 0.9",
    "eight":"4800Km , 1",
    "nine":"4800Km , 1.25",
    "ten":"4800Km , 1.4"
};

var atmosphereTable = {
    "zero":{
        "atmosphere":"None",
        "gear":"Vacc Suit"
    },
    "one":{
        "atmosphere":"Trace",
        "gear":"Vacc Suit"
    },
    "two":{
        "atmosphere":"Very Thin and Tainted",
        "gear":"Respirator,Filter"
    },
    "three":{
        "atmosphere":"Very Thin",
        "gear":"Respirator"
    },
    "four":{
        "atmosphere":"Thin and Tainted",
        "gear":"Filter"
    },
    "five":{
        "atmosphere":"Thin",
        "gear":"None"
    },
    "Six":{
        "atmosphere":"Standard",
        "gear":"None"
    },
    "seven":{
        "atmosphere":"Standard and Tainted",
        "gear":"Filiter"
    },
    "eight":{
        "atmosphere":"Dense",
        "gear":"None"
    },
    "nine":{
        "atmosphere":"Dense and Tainted",
        "gear":"Filiter"
    },
    "ten":{
        "atmosphere":"Exotic",
        "gear":"Air Supply"
    },
    "Eleven":{
        "atmosphere":"Corrosive",
        "gear":"Vacc Suit"
    },
    "tweleve":{
        "atmosphere":"Insidious",
        "gear":"Vacc Suit"
    },
    "thirteen":{
        "atmosphere":"Dense and High",
        "gear":"None"
    },
    "fourteen":{
        "atmosphere":"Thin and low",
        "gear":"None"
    },
    "fifteen":{
        "atmosphere":"Varies",
        "gear":"Varies"
    }
}

var hydrographicsTable ={
    "zero":"0-5 percent water",
    "one":"6-15 percent water",
    "two":"16-25 percent water",
    "three":"26-35 percent water",
    "four":"36-45 percent water",
    "five":"46-55 percent water",
    "six":"56-65 percent water",
    "seven":"66-75 percent water",
    "eight":"76-85 percent water",
    "nine":"86-95 percent water",
    "ten":"96-100 percent water"
}

var populationTable = {
    "zero":{
        "population":"0",
        "description":"None"
    },
    "one":{
        "population":"1+",
        "description":"A tiny farmstead or a single family"
    },
    "two":{
        "population":"100+",
        "description":"A village"
    },
    "three":{
        "population":"1,000+",
        "description":"None"
    },
    "four":{
        "population":"10,000+",
        "description":"Small town"
    },
    "five":{
        "population":"100,000+",
        "description":"Average city"
    },
    "six":{
        "population":"1,000,000+",
        "description":"None"
    },
    "seven":{
        "population":"10,000,000+",
        "description":"Large city"
    },
    "eight":{
        "population":"100,000,000+",
        "description":"None"
    },
    "nine":{
        "population":"1,000,000,000+",
        "description":"Present day Earth"
    },
    "ten":{
        "population":"10,000,000,000+",
        "description":"None"
    },
    "eleven":{
        "population":"100,000,000,000+",
        "description":"Incredibly crowded world"
    },
    "tweleve":{
        "population":"1,000,000,000,000+",
        "description":"World-City"
    }
}

var goverementTable = {
    "zero":{
        "goverement":"None",
        "description":"No government structure. In many cases,family bonds predominate.",
        "examples":"Family, Clan,Anarchy",
        "contraband":"None"
    },
    "one":{
        "goverement":"Company/corporation",
        "description":"Ruling functions are assumed by a company managerial elite, and most citizenry are company employees or dependants.",
        "examples":"Corporate outpost, asteroid mine, feudal domain.",
        "contraband":"Weapons,Drugs,Travellers"
    },
    "two":{
        "goverement":"Participating democracy",
        "description":"Ruling functions are reached by the advice and consent of the citizenry directly.",
        "examples":"Collective, tribal council, commlinked consensus",
        "contraband":"Drugs"
    },
    "three":{
        "goverement":"Self-perpetuating oligarchy",
        "description":"Ruling functions are performed by a restricted minority, with little or no input from the mass of citizenry.",
        "examples":"Plutocracy,hereditary ruling caste.",
        "contraband":"Technology,Weapons,Travellers"
    },
    "four":{
        "goverement":"Representative democracy",
        "description":"Ruling functions are performed by elected representatives.",
        "examples":"Republic,democracy.",
        "contraband":"Drugs,Weapons,Psionics."
    },
    "five":{
        "goverement":"Feudal technocracy",
        "description":"Ruling functions are performed by specifi c individuals for persons who agree to be ruled by them. Relationships are based on the performance of technical activities which are mutually benefi cial.",
        "examples":"None",
        "contraband":"Technology,Weapons,Computers"
    },
    "six":{
        "goverement":"Captive government",
        "description":"Ruling functions are performed by an imposed leadership answerable to an outside group.",
        "examples":"A colony or conquered area.",
        "contraband":"Weapons,Technology,Travellers"
    },
    "seven":{
        "goverement":"Balkanisation",
        "description":"No central authority exists; rival governmentscomplete for control. Law level refers to the government nearest the starport.",
        "examples":"Multiple governments,civil war.",
        "contraband":"Varies"
    },
    "eight":{
        "goverement":"Civil service bureaucracy",
        "description":"Ruling functions are performed by government agencies employing individuals selected for their expertise.",
        "examples":"Technocracy,Communism.",
        "contraband":"Drugs,Weapons"
    },
    "nine":{
        "goverement":"Impersonal Bureaucracy",
        "description":"Ruling functions are performed by agencies which have become insulated from the governed citizens.",
        "examples":"Entrenched castes of bureaucrats,decaying empire.",
        "contraband":"Technology,Weapons,Drugs,Travellers,Psionics"
    },
    "ten":{
        "goverement":"Charismatic dictator",
        "description":"Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confi dence of the citizens.",
        "examples":"Revolutionary leader, messiah,emperor.",
        "contraband":"None"
    },
    "eleven":{
        "goverement":"Non-charismatic leader",
        "description":"A previous charismatic dictator has been replaced by a leader through normal channels.",
        "examples":"Military dictatorship,hereditary kingship.",
        "contraband":"Weapons,Technology,Computers"
    },
    "tweleve":{
        "goverement":"Charismatic oligarchy",
        "description":"Ruling functions are performed by a select group of members of an organisation or class which enjoys the overwhelming confi dence of the citizenry.",
        "examples":"Junta,revolutionary ,council.",
        "contraband":"Weapons"
    },
    "thirteen":{
        "goverement":"Religious dictatorship",
        "description":"Ruling functions are performed by a religious organisation without regard to the specific individual needs of the citizenry.",
        "examples":"Cult, transcendent philosophy, psionic group mind.",
        "contraband":"Varies"
    }
}

var lawLevelTable ={
    "zero":{
        "weapons":"None",
        "drugs":"None",
        "information":"None",
        "technology":"None",
        "travellers":"None",
        "psionics":"None"
    },
    "one":{
        "weapons":"Poison gas,explosives,undetectable weapons, WMD",
        "drugs":"Highly addictive and dangerous narcotics",
        "information":"Intellect programs",
        "technology":"Dangerous technologies such as nanotechnology",
        "travellers":"Visitors must contact planetary authorities by radio, landing is permitted anywhere",
        "psionics":"Dangerous talents must be registered."
    },
    "two":{
        "weapons":"Portable energy weapons (exceptship-mounted weapons)",
        "drugs":"Highly addictive narcotics",
        "information":"Agent programs",
        "technology":"Alien technology",
        "travellers":"Visitors must report passenger manifest, landing is permitted anywhere",
        "psionics":"All psionic powers must be registered; use of dangerous powers forbidden."
    },
    "three":{
        "weapons":"Heavy weapons",
        "drugs":"Combat drugs",
        "information":"Intrusion programs",
        "technology":"TL 15 items",
        "travellers":"Landing only at starport or other authorised sites",
        "psionics":"Use of telepathy restricted to governmentapproved telepaths"
    },
    "four":{
        "weapons":"Light assault weapons and submachine guns",
        "drugs":"Addictive narcotics",
        "information":"Security programs",
        "technology":"TL 13 items",
        "travellers":"Landing only at starport",
        "psionics":"Use of teleportation and clairvoyance restricted"
    },
    "five":{
        "weapons":"Personal concealable weapons",
        "drugs":"Anagathics",
        "information":"Expert programs",
        "technology":"TL 11 items",
        "travellers":"Citizens must register offworld travel, visitors must register all business",
        "psionics":"Use of all psionic powers restricted to government psionicists"
    },
    "six":{
        "weapons":"All fi rearms except shotguns and stunners; carrying weapons discouraged",
        "drugs":"Fast and Slow drugs",
        "information":"Recent news from offworld.",
        "technology":"TL 9 items",
        "travellers":"Visits discouraged; excessive contact with citizens forbidden",
        "psionics":"Possession of psionic drugs banned"
    },
    "seven":{
        "weapons":"Shotguns",
        "drugs":"All narcotics",
        "information":"Library programs,unfiltered data about other worlds. Free speech curtailed.",
        "technology":"TL 7 items",
        "travellers":"Citizens may not leave planet; visitors may not leave starport",
        "psionics":"Use of psionics forbidden"
    },
    "eight":{
        "weapons":"All bladed weapons, stunners",
        "drugs":"Medicinal drugs",
        "information":"Information technology, any non-critical data from offworld, personal media.",
        "technology":"TL 5 items",
        "travellers":"Landing permitted only to imperial agents",
        "psionics":"Psionic-related technology banned"
    },
    "nine":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    },
    "ten":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    },
    "eleven":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    },    
    "tweleve":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    },   
     "thirteen":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    },
    "fourteen":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    }, 
    "fifteen":{
        "weapons":"Any weapons",
        "drugs":"All drugs",
        "information":"Any data from offworld. No free press.",
        "technology":"TL 3 items",
        "travellers":"No offworlders permitted",
        "psionics":"Allpsionics"
    },
}

var planetHexCodeInput = {
    hexParseResult: "Enter Planet Hex Code For Description",
    getHexCode: function(value) {
        if( value != ""){
        this.hexParseResult = parseHex(value);
        }else{
            this.hexParseResult = "Enter Planet Hex Code For Description";
        }
    },
    view: function() {
        return [
            m("input[type=text]" ,{oninput: m.withAttr("value", this.getHexCode.bind(this))}),
            m("br"),
            m("textarea" ,{rows:"25" , cols:"150"}, this.hexParseResult)
        ];
    }
}

function parseHex(code){
    var palnetDes = "";

    //Starport Quality part
    var starportQualityTableResult = starportQualityTable[code[0]];
    palnetDes += "Starport Quality: " + starportQualityTableResult.quality + 
                 " with Berthing Cost of " + starportQualityTableResult.berthingCost +
                 " and offers the following Facilities " + starportQualityTableResult.facilities + '.\n\n';

    //Planet Size part 
    var sizeTableResult = sizeTable[characterToJsonKey(code[1])];
    palnetDes += "Planet size and Gravity are " + sizeTableResult + '.\n\n';

    //Atmosphere part
    var atmosphereTableResult = atmosphereTable[characterToJsonKey(code[2])];
    palnetDes += "Atmosphere type is " + atmosphereTableResult.atmosphere + 
                 " Gear required " + atmosphereTableResult.gear + ".\n\n";

    //Hydrographic percentage part
    var hydrographicsTableResult = hydrographicsTable[characterToJsonKey(code[3])];
    palnetDes += "Planet is " + hydrographicsTableResult + ".\n\n";

    //Population part
    var populationTableResult = populationTable[characterToJsonKey(code[4])];
    palnetDes += "Planet Population is at least " + populationTableResult.population + 
                 " they live on the planet Like the following " + populationTableResult.description + ".\n\n";

    //Government part 
    var goverementTableResult = goverementTable[characterToJsonKey(code[5])];
    palnetDes += "Goverment type is " + goverementTableResult.goverement + ".\n" + 
                 "Described as " + goverementTableResult.description + "\n" + 
                 "Examples of Goverement type are " + goverementTableResult.examples + 
                 " and common contraband items are "+ goverementTableResult.contraband +".\n\n";

    //Law level part 
    var lawLevelTableResult = lawLevelTable[characterToJsonKey(code[6])];
    palnetDes += "Bans relate to contraband in Goverement Type .\n" + 
                 "Weapon bans: " + lawLevelTableResult.weapons + ".\n" +
                 "Drugs bans: " + lawLevelTableResult.drugs + ".\n" +
                 "Information bans: " + lawLevelTableResult.information + ".\n" +
                 "Technology bans: " + lawLevelTableResult.technology + ".\n" +
                 "Travellers bans: " + lawLevelTableResult.travellers + ".\n" +
                 "Psionics bans: " + lawLevelTableResult.psionics + ".\n"; 

    return palnetDes;
}

function characterToJsonKey(character){
    if(character == 0 ){
        return "zero"
    }else if(character == 1 ){
        return "one"
    }else if(character == 2 ){
        return "two"
    }else if(character == 3 ){
        return "three"
    }else if(character == 4 ){
        return "four"
    }else if(character == 5 ){
        return "five"
    }else if(character == 6 ){
        return "six"
    }else if(character == 7 ){
        return "seven"
    }else if(character == 8 ){
        return "eight"
    }else if(character == 9 ){
        return "nine"
    }else if(character == "A" ){
        return "ten"
    }else if(character == "B" ){
        return "eleven"
    }else if(character == "C" ){
        return "tweleve"
    }else if(character == "D" ){
        return "thirteen"
    }else if(character == "E" ){
        return "fourteen"
    }else if(character == "F" ){
        return "fifteen"
    }
}

m.mount(document.body , planetHexCodeInput);
