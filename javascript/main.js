const tradePrices = {normal:{full:"800,000",
                             last:"250,000"},
                     heroic:{full:"4,780,000", 
                             last:"2,780,000", 
                             aotc:"1,580,000"}};
const discordPrices = {normal:{full:"730,000",
                               last:"250,000"},
                       heroic:{full:"4,113,000", 
                               last:"2,413,000", 
                               aotc:"1,393,000"}};
const tradeProfit = {normal:{full:"120,000",
                             last:"37,500"}, 
                     heroic:{full:"717,000", 
                             last:"417,000", 
                             aotc:"237,000"}};
const minPrice = {normal:{full:"680,000",
                          last:"212,500"}, 
                  heroic:{full:"4,063,000", 
                          last:"2,363,000", 
                          aotc:"1,343,000"}};

function showRuns()
{
    var difficulty = document.getElementById("Difficulty").value;

    switch(difficulty)
    {
        case "normal":
            document.getElementById("r2").style.display = "none";
            break;
        case "heroic":
            document.getElementById("r2").style.display = "";
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
    var base = document.getElementById("BasePrice").value;

    if(difficulty == "normal")
    {
        runTradeNormal(base, runType);
    }
    else
    {
        runTradeHeroic(base, runType);
    }
}

function runTradeNormal(base, runOption)
{
    switch(runOption)
    {
        case "fullclear":
            tradeNFullClear(base);
            break;
        case "last3":
            tradeNLast(base);
            break;
        default:
            break;
    }
}

function runTradeHeroic(base, runOption)
{
    switch(runOption)
    {
        case "fullclear":
            tradeHFullClear(base);
            break;
        case "last3":
            tradeHLast(base);
            break;
        case "aotc":
            tradeHAotc(base);
            break;
        default:
            break;
    }
}

function tradeNFullClear(base)
{
    var Commission = base - parseInt(minPrice["normal"]["full"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["normal"]["full"];
        document.getElementById("MinPrice").value = minPrice["normal"]["full"];
        document.getElementById("MaxProfit").value = tradeProfit["normal"]["full"];
        document.getElementById("Commission").value = Commission;
}

function tradeNLast(base)
{
    var Commission = base - parseInt(minPrice["normal"]["last"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["normal"]["last"];
        document.getElementById("MinPrice").value = minPrice["normal"]["last"];
        document.getElementById("MaxProfit").value = tradeProfit["normal"]["last"];
        document.getElementById("Commission").value = Commission;
}

function tradeHFullClear(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["full"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["heroic"]["full"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["full"];
        document.getElementById("MaxProfit").value = tradeProfit["heroic"]["full"];
        document.getElementById("Commission").value = Commission;
}

function tradeHLast(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["last"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = tradePrices["heroic"]["last"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["last"];
        document.getElementById("MaxProfit").value = tradeProfit["heroic"]["last"];
        document.getElementById("Commission").value = Commission;
}

function tradeHAotc(base)
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
    var base = document.getElementById("BasePrice").value;

    if(difficulty == "normal")
    {
        runDiscordNormal(base, runType);
    }
    else
    {
        runDiscordHeroic(base, runType);
    }
}

function runDiscordNormal(base, runOption)
{
    switch(runOption)
    {
        case "fullclear":
            discordNFullClear(base);
            break;
        case "last3":
            discordNLast(base);
            break;
        default:
            break;
    }
}

function discordNFullClear(base)
{
    var Commission = base - parseInt(minPrice["normal"]["full"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = discordPrices["normal"]["full"];
        document.getElementById("MinPrice").value = minPrice["normal"]["full"];
        document.getElementById("MaxProfit").value = "50,000";
        document.getElementById("Commission").value = Commission;
}

function discordNLast(base)
{
    var Commission = base - parseInt(minPrice["normal"]["last"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = discordPrices["normal"]["last"];
        document.getElementById("MinPrice").value = minPrice["normal"]["last"];
        document.getElementById("MaxProfit").value = "37,500";
        document.getElementById("Commission").value = Commission;
}

function runDiscordHeroic(base, runOption)
{
    switch(runOption)
    {
        case "fullclear":
            discordHFullClear(base);
            break;
        case "last3":
            discordHLast(base);
            break;
        case "aotc":
            discordHAotc(base);
            break;
        default:
            break;
    }
}

function discordHFullClear(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["full"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = discordPrices["heroic"]["full"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["full"];
        document.getElementById("MaxProfit").value = "50,000";
        document.getElementById("Commission").value = Commission;
}

function discordHLast(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["last"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = discordPrices["heroic"]["last"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["last"];
        document.getElementById("MaxProfit").value = "50,000";
        document.getElementById("Commission").value = Commission;
}

function discordHAotc(base)
{
    var Commission = base - parseInt(minPrice["heroic"]["aotc"].replace(/,/g, ""));
        Commission = new Intl.NumberFormat('en-US').format(Commission);

        document.getElementById("ListPrice").value = discordPrices["heroic"]["aotc"];
        document.getElementById("MinPrice").value = minPrice["heroic"]["aotc"];
        document.getElementById("MaxProfit").value = "50,000";
        document.getElementById("Commission").value = Commission;
}