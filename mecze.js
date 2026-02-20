const TERMINARZ = [
    {
        nazwa: "1. Runda (10-12.04)",
        mecze: [
            { id: 1, host: "Bayersystem GKM Grudziądz", guest: "Gezet Stal Gorzów", data: "10-12.04", wynik: null },
            { id: 2, host: "Fogo Unia Leszno", guest: "Krono-Plast Włókniarz Częstochowa", data: "10-12.04", wynik: null },
            { id: 3, host: "Orlen Oil Motor Lublin", guest: "Pres Grupa Deweloperska Toruń", data: "10-12.04", wynik: null },
            { id: 4, host: "Betard Sparta Wrocław", guest: "Stelmet Falubaz Zielona Góra", data: "10-12.04", wynik: null }
        ]
    },
    {
        nazwa: "2. Runda (17-19.04)",
        mecze: [
            { id: 5, host: "Krono-Plast Włókniarz Częstochowa", guest: "Orlen Oil Motor Lublin", data: "17-19.04", wynik: null },
            { id: 6, host: "Gezet Stal Gorzów", guest: "Betard Sparta Wrocław", data: "17-19.04", wynik: null },
            { id: 7, host: "Pres Grupa Deweloperska Toruń", guest: "Fogo Unia Leszno", data: "17-19.04", wynik: null },
            { id: 8, host: "Stelmet Falubaz Zielona Góra", guest: "Bayersystem GKM Grudziądz", data: "17-19.04", wynik: null }
        ]
    },
    {
        nazwa: "3. Runda (24-26.04)",
        mecze: [
            { id: 9, host: "Krono-Plast Włókniarz Częstochowa", guest: "Pres Grupa Deweloperska Toruń", data: "24-26.04", wynik: null },
            { id: 10, host: "Bayersystem GKM Grudziądz", guest: "Betard Sparta Wrocław", data: "24-26.04", wynik: null },
            { id: 11, host: "Fogo Unia Leszno", guest: "Gezet Stal Gorzów", data: "24-26.04", wynik: null },
            { id: 12, host: "Orlen Oil Motor Lublin", guest: "Stelmet Falubaz Zielona Góra", data: "24-26.04", wynik: null }
        ]
    },
    {
        nazwa: "4. Runda (3, 24.05)",
        mecze: [
            { id: 13, host: "Pres Grupa Deweloperska Toruń", guest: "Bayersystem GKM Grudziądz", data: "03/24.05", wynik: null },
            { id: 14, host: "Betard Sparta Wrocław", guest: "Fogo Unia Leszno", data: "03/24.05", wynik: null },
            { id: 15, host: "Gezet Stal Gorzów", guest: "Orlen Oil Motor Lublin", data: "03/24.05", wynik: null },
            { id: 16, host: "Stelmet Falubaz Zielona Góra", guest: "Krono-Plast Włókniarz Częstochowa", data: "03/24.05", wynik: null }
        ]
    },
    {
        nazwa: "5. Runda (8-10.05)",
        mecze: [
            { id: 17, host: "Krono-Plast Włókniarz Częstochowa", guest: "Gezet Stal Gorzów", data: "08-10.05", wynik: null },
            { id: 18, host: "Bayersystem GKM Grudziądz", guest: "Fogo Unia Leszno", data: "08-10.05", wynik: null },
            { id: 19, host: "Orlen Oil Motor Lublin", guest: "Betard Sparta Wrocław", data: "08-10.05", wynik: null },
            { id: 20, host: "Pres Grupa Deweloperska Toruń", guest: "Stelmet Falubaz Zielona Góra", data: "08-10.05", wynik: null }
        ]
    },
    {
        nazwa: "6. Runda (15-17.05)",
        mecze: [
            { id: 21, host: "Gezet Stal Gorzów", guest: "Stelmet Falubaz Zielona Góra", data: "15-17.05", wynik: null },
            { id: 22, host: "Bayersystem GKM Grudziądz", guest: "Krono-Plast Włókniarz Częstochowa", data: "15-17.05", wynik: null },
            { id: 23, host: "Fogo Unia Leszno", guest: "Orlen Oil Motor Lublin", data: "15-17.05", wynik: null },
            { id: 24, host: "Betard Sparta Wrocław", guest: "Pres Grupa Deweloperska Toruń", data: "15-17.05", wynik: null }
        ]
    },
    {
        nazwa: "7. Runda (29-31.05)",
        mecze: [
            { id: 25, host: "Krono-Plast Włókniarz Częstochowa", guest: "Betard Sparta Wrocław", data: "29-31.05", wynik: null },
            { id: 26, host: "Orlen Oil Motor Lublin", guest: "Bayersystem GKM Grudziądz", data: "29-31.05", wynik: null },
            { id: 27, host: "Pres Grupa Deweloperska Toruń", guest: "Gezet Stal Gorzów", data: "29-31.05", wynik: null },
            { id: 28, host: "Stelmet Falubaz Zielona Góra", guest: "Fogo Unia Leszno", data: "29-31.05", wynik: null }
        ]
    },
    {
        nazwa: "8. Runda (12-14.06)",
        mecze: [
            { id: 29, host: "Bayersystem GKM Grudziądz", guest: "Stelmet Falubaz Zielona Góra", data: "12-14.06", wynik: null },
            { id: 30, host: "Fogo Unia Leszno", guest: "Pres Grupa Deweloperska Toruń", data: "12-14.06", wynik: null },
            { id: 31, host: "Orlen Oil Motor Lublin", guest: "Krono-Plast Włókniarz Częstochowa", data: "12-14.06", wynik: null },
            { id: 32, host: "Betard Sparta Wrocław", guest: "Gezet Stal Gorzów", data: "12-14.06", wynik: null }
        ]
    },
    {
        nazwa: "9. Runda (19-21.06)",
        mecze: [
            { id: 33, host: "Krono-Plast Włókniarz Częstochowa", guest: "Fogo Unia Leszno", data: "19-21.06", wynik: null },
            { id: 34, host: "Gezet Stal Gorzów", guest: "Bayersystem GKM Grudziądz", data: "19-21.06", wynik: null },
            { id: 35, host: "Pres Grupa Deweloperska Toruń", guest: "Orlen Oil Motor Lublin", data: "19-21.06", wynik: null },
            { id: 36, host: "Stelmet Falubaz Zielona Góra", guest: "Betard Sparta Wrocław", data: "19-21.06", wynik: null }
        ]
    },
    {
        nazwa: "10. Runda (26-28.06)",
        mecze: [
            { id: 37, host: "Gezet Stal Gorzów", guest: "Fogo Unia Leszno", data: "26-28.06", wynik: null },
            { id: 38, host: "Pres Grupa Deweloperska Toruń", guest: "Krono-Plast Włókniarz Częstochowa", data: "26-28.06", wynik: null },
            { id: 39, host: "Betard Sparta Wrocław", guest: "Bayersystem GKM Grudziądz", data: "26-28.06", wynik: null },
            { id: 40, host: "Stelmet Falubaz Zielona Góra", guest: "Orlen Oil Motor Lublin", data: "26-28.06", wynik: null }
        ]
    },
    {
        nazwa: "11. Runda (3-5.07)",
        mecze: [
            { id: 41, host: "Krono-Plast Włókniarz Częstochowa", guest: "Stelmet Falubaz Zielona Góra", data: "03-05.07", wynik: null },
            { id: 42, host: "Bayersystem GKM Grudziądz", guest: "Pres Grupa Deweloperska Toruń", data: "03-05.07", wynik: null },
            { id: 43, host: "Fogo Unia Leszno", guest: "Betard Sparta Wrocław", data: "03-05.07", wynik: null },
            { id: 44, host: "Orlen Oil Motor Lublin", guest: "Gezet Stal Gorzów", data: "03-05.07", wynik: null }
        ]
    },
    {
        nazwa: "12. Runda (2, 9.08)",
        mecze: [
            { id: 45, host: "Gezet Stal Gorzów", guest: "Krono-Plast Włókniarz Częstochowa", data: "02/09.08", wynik: null },
            { id: 46, host: "Fogo Unia Leszno", guest: "Bayersystem GKM Grudziądz", data: "02/09.08", wynik: null },
            { id: 47, host: "Betard Sparta Wrocław", guest: "Orlen Oil Motor Lublin", data: "02/09.08", wynik: null },
            { id: 48, host: "Stelmet Falubaz Zielona Góra", guest: "Pres Grupa Deweloperska Toruń", data: "02/09.08", wynik: null }
        ]
    },
    {
        nazwa: "13. Runda (14-16.08)",
        mecze: [
            { id: 49, host: "Krono-Plast Włókniarz Częstochowa", guest: "Bayersystem GKM Grudziądz", data: "14-16.08", wynik: null },
            { id: 50, host: "Orlen Oil Motor Lublin", guest: "Fogo Unia Leszno", data: "14-16.08", wynik: null },
            { id: 51, host: "Pres Grupa Deweloperska Toruń", guest: "Betard Sparta Wrocław", data: "14-16.08", wynik: null },
            { id: 52, host: "Stelmet Falubaz Zielona Góra", guest: "Gezet Stal Gorzów", data: "14-16.08", wynik: null }
        ]
    },
    {
        nazwa: "14. Runda (21-23.08)",
        mecze: [
            { id: 53, host: "Gezet Stal Gorzów", guest: "Pres Grupa Deweloperska Toruń", data: "21-23.08", wynik: null },
            { id: 54, host: "Bayersystem GKM Grudziądz", guest: "Orlen Oil Motor Lublin", data: "21-23.08", wynik: null },
            { id: 55, host: "Fogo Unia Leszno", guest: "Stelmet Falubaz Zielona Góra", data: "21-23.08", wynik: null },
            { id: 56, host: "Betard Sparta Wrocław", guest: "Krono-Plast Włókniarz Częstochowa", data: "21-23.08", wynik: null }
        ]
    },
    {
        nazwa: "15. Runda (Play-off/down)",
        mecze: [
            { id: 57, host: "Półfinał 1", guest: "TBD", data: "06.09", wynik: null },
            { id: 58, host: "Półfinał 2", guest: "TBD", data: "06.09", wynik: null },
            { id: 59, host: "Mecz o 5-6 msc (1)", guest: "TBD", data: "30.08", wynik: null },
            { id: 60, host: "Mecz o 5-6 msc (2)", guest: "TBD", data: "30.08", wynik: null }
        ]
    },
    {
        nazwa: "16. Runda (Rewanże)",
        mecze: [
            { id: 61, host: "Półfinał 1 (Rewanż)", guest: "TBD", data: "13.09", wynik: null },
            { id: 62, host: "Półfinał 2 (Rewanż)", guest: "TBD", data: "13.09", wynik: null },
            { id: 63, host: "Mecz o 5-6 msc (1R)", guest: "TBD", data: "04.09", wynik: null },
            { id: 64, host: "Mecz o 5-6 msc (2R)", guest: "TBD", data: "04.09", wynik: null }
        ]
    },
    {
        nazwa: "17. Runda (Finały)",
        mecze: [
            { id: 65, host: "FINAŁ", guest: "TBD", data: "20.09", wynik: null },
            { id: 66, host: "Mecz o 3. miejsce", guest: "TBD", data: "20.09", wynik: null },
            { id: 67, host: "Mecz o 7. miejsce", guest: "TBD", data: "13.09", wynik: null }
        ]
    },
    {
        nazwa: "18. Runda (Finały Rewanże)",
        mecze: [
            { id: 68, host: "FINAŁ (Rewanż)", guest: "TBD", data: "27.09", wynik: null },
            { id: 69, host: "Mecz o 3. miejsce (Rewanż)", guest: "TBD", data: "27.09", wynik: null },
            { id: 70, host: "Mecz o 7. miejsce (Rewanż)", guest: "TBD", data: "18.09", wynik: null }
        ]
    }
];