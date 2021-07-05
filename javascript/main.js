const tradePrices = {normal:{full:"1,380,000"},
                     heroic:{full:"4,780,000", 
                             last:"2,780,000", 
                             aotc:"1,580,000"}};
const discordPrices = {normal:{full:"1,223,000"},
                       heroic:{full:"4,113,000", 
                               last:"2,413,000", 
                               aotc:"1,393,000"}};
const tradeProfit = {normal:{full:"207,000"}, 
                     heroic:{full:"717,000", 
                             last:"417,000", 
                             aotc:"237,000"}};
const minPrice = {normal:{full:"1,173,000"}, 
                  heroic:{full:"4,063,000", 
                          last:"2,363,000", 
                          aotc:"1,343,000"}};

function showRuns()
{
    var difficulty = document.getElementById("Difficulty").value;
    document.getElementById("RunType").options.length = 0;

    switch(difficulty)
    {
        case "normal":
            document.getElementById("RunType").options[0] = new Option("Full Clear","fullclear");
            break;
        case "heroic":
            document.getElementById("RunType").options[0] = new Option("Full Clear", "fullclear");
            document.getElementById("RunType").options[1] = new Option("Last 3", "last3");
            document.getElementById("RunType").options[2] = new Option("AOTC", "aotc");
            break;
        default:
            break;
    }
}

function Calculate()
{
    var booking = document.getElementById("Bookings").value;
    var difficulty = document.getElementById("Difficulty").value;

    if(booking == "tradechat")
    {
        runTrade(difficulty);
    }
    else
    {
        runDiscord(difficulty);
    }
}

function runTrade(difficulty)
{
    var runType = document.getElementById("RunType").value;

    if(difficulty == "normal")
    {
        runNormal();
    }
    else
    {
        runHeroic(runType);
    }
}

function runNormal()
{
    var base = document.getElementById("BasePrice").value;
    var Commission = base - parseInt(minPrice["normal"]["full"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["normal"]["full"];
        document.getElementById("MinPrice").value = minPrice["normal"]["full"];
        document.getElementById("MaxProfit").value = tradeProfit["normal"]["full"];
        document.getElementById("Commission").value = Commission;
}

function runHeroic(runOption)
{
    var base = document.getElementById("BasePrice").value;

    switch(runOption)
    {
        case "fullclear":
            heroicFullClear(base);
            break;
        case "last3":
            heroicLast(base);
            break;
        case "aotc":
            heroicAotc(base);
            break;
        default:
            break;
    }
}

function heroicFullClear(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["full"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["heroic"]["full"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["full"];
        document.getElementById("MaxProfit").value = tradeProfit["heroic"]["full"];
        document.getElementById("Commission").value = Commission;
}

function heroicLast(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["last"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["heroic"]["last"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["last"];
        document.getElementById("MaxProfit").value = tradeProfit["heroic"]["last"];
        document.getElementById("Commission").value = Commission;
}

function heroicAotc(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["aotc"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["heroic"]["aotc"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["aotc"];
        document.getElementById("MaxProfit").value = tradeProfit["heroic"]["aotc"];
        document.getElementById("Commission").value = Commission;
}

function runDiscord(difficulty)
{
    var runType = document.getElementById("RunType").value;

    if(difficulty == "normal")
    {
        runNormal();
    }
    else
    {
        runHeroic(runType);
    }
}
