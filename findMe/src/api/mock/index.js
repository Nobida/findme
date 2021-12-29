const lineData = [{'name': 'East Asia & Pacific', 'data': {'1985': '84.1245193481445', '1986': '87.8373336791992', '1987': '91.9220581054688', '1988': '93.7372207641602', '1989': '93.9624404907227', '1990': '93.6322631835938', '1991': '93.932746887207', '1992': '93.9618301391602', '1993': '93.3827362060547', '1994': '92.6384201049805', '1995': '91.6744995117188', '1996': '91.1676025390625', '1997': '90.8064575195313', '1998': '92.6379318237305', '1999': '94.4030532836914', '2000': '94.7107467651367', '2001': '95.1851425170898', '2002': '97.3135986328125', '2003': '97.0093994140625', '2004': '97.0151672363281', '2005': '94.8832931518555', '2006': '94.4098892211914', '2007': '95.4900817871094', '2008': '95.5239181518555', '2009': '95.8589630126953', '2010': '96.2385482788086', '2011': '96.7340393066406', '2012': '96.4490814208984', '2013': '96.2272872924805', '2014': '96.1948165893555'}}, {'name': 'Europe & Central Asia', 'data': {'1985': '93.260383605957', '1986': '93.8339004516602', '1987': '94.0947799682617', '1988': '94.6430130004883', '1989': '94.4156188964844', '1990': '94.5479202270508', '1991': '94.9383697509766', '1992': '94.7216110229492', '1993': '94.2997589111328', '1994': '94.0606002807617', '1995': '93.9106063842773', '1996': '94.2685470581055', '1997': '94.4388198852539', '1998': '95.267822265625', '1999': '95.6404495239258', '2000': '96.2544403076172', '2001': '97.0691375732422', '2002': '97.5709075927734', '2003': '97.2636795043945', '2004': '97.2881011962891', '2005': '96.47265625', '2006': '96.6062774658203', '2007': '96.7333526611328', '2008': '96.9741668701172', '2009': '96.9070434570313', '2010': '97.232780456543', '2011': '97.3063125610352', '2012': '97.2518692016602', '2013': '97.2910079956055', '2014': '97.0324935913086'}}, {'name': 'Latin America & Caribbean', 'data': {'1985': '90.2231521606445', '1986': '90.2342376708984', '1987': '90.4840316772461', '1988': '90.3486785888672', '1989': '89.7668228149414', '1990': '90.3621520996094', '1991': '90.7398986816406', '1992': '91.5489501953125', '1993': '91.8326034545898', '1994': '91.4325485229492', '1995': '91.4280166625977', '1996': '91.7564392089844', '1997': '92.0613632202148', '1998': '93.7112808227539', '1999': '94.8533935546875', '2000': '95.6178207397461', '2001': '95.6361923217773', '2002': '95.5762329101563', '2003': '94.5808181762695', '2004': '95.0690689086914', '2005': '95.5862808227539', '2006': '95.0551681518555', '2007': '94.6057586669922', '2008': '95.3840789794922', '2009': '95.7433700561523', '2010': '95.8192291259766', '2011': '95.635871887207', '2012': '95.3086090087891', '2013': '94.4047393798828', '2014': '94.1983108520508'}}, {'name': 'Middle East & North Africa', 'data': {'1985': '69.7190399169922', '1986': '71.1042633056641', '1987': '72.4398803710938', '1988': '73.696662902832', '1989': '73.9704666137695', '1990': '76.1109619140625', '1991': '77.4642181396484', '1992': '74.5618133544922', '1993': '75.2038726806641', '1994': '77.5336685180664', '1995': '76.1625595092773', '1996': '78.8595962524414', '1997': '78.8754425048828', '1998': '79.3279418945313', '1999': '79.922477722168', '2000': '81.1122894287109', '2001': '83.7024383544922', '2002': '85.9817962646484', '2003': '87.1251525878906', '2004': '88.4317398071289', '2005': '89.1037063598633', '2006': '89.4705963134766', '2007': '90.7687530517578', '2008': '91.3146591186523', '2009': '91.8878707885742', '2010': '93.3065872192383', '2011': '93.5886001586914', '2012': '94.0756530761719', '2013': '93.5063629150391', '2014': '93.2148666381836'}}, {'name': 'North America', 'data': {'1985': '93.1665496826172', '1986': '94.3982696533203', '1987': '95.9469833374023', '1988': '96.7820587158203', '1989': '97.523551940918', '1990': '98.353630065918', '1991': '98.1745834350586', '1992': '97.2084426879883', '1993': '95.9713134765625', '1994': '95.8835830688477', '1995': '96.8513412475586', '1996': '96.5718765258789', '1997': '97.1731491088867', '1998': '97.7432403564453', '1999': '97.9806289672852', '2000': '97.9390716552734', '2001': '98.1788177490234', '2002': '97.0134506225586', '2003': '96.4151229858398', '2004': '95.4468536376953', '2005': '96.1554107666016', '2006': '97.3998870849609', '2007': '97.9529037475586', '2008': '97.9811019897461', '2009': '97.2676315307617', '2010': '95.4516677856445', '2011': '95.0007095336914', '2012': '94.5527801513672', '2013': '93.1943817138672', '2014': '94.8539505004883'}}, {'name': 'South Asia', 'data': {'1985': '54.9576797485352', '1986': '57.0689697265625', '1987': '55.2817993164063', '1988': '58.2786903381348', '1989': '61.553581237793', '1990': '61.6171913146973', '1991': '62.1618614196777', '1992': '63.3151016235352', '1993': '65.7375183105469', '1994': '67.7680969238281', '1995': '68.2624206542969', '1996': '68.832389831543', '1997': '69.0833969116211', '1998': '68.1686706542969', '1999': '69.4146270751953', '2000': '71.9742889404297', '2001': '72.7294235229492', '2002': '74.2219009399414', '2003': '82.2056503295898', '2004': '84.8079986572266', '2005': '86.843391418457', '2006': '88.7142181396484', '2007': '90.904296875', '2008': '91.6892700195313', '2009': '91.8110427856445', '2010': '92.1827087402344', '2011': '92.0975494384766', '2012': '92.5874099731445', '2013': '92.9084777832031', '2014': '92.9776229858398'}}, {'name': 'Sub-Saharan Africa', 'data': {'1985': '51.7751998901367', '1986': '50.1158790588379', '1987': '49.0073394775391', '1988': '48.3701095581055', '1989': '48.8123817443848', '1990': '48.3278999328613', '1991': '49.4843406677246', '1992': '49.4431495666504', '1993': '50.0093116760254', '1994': '50.3499984741211', '1995': '50.8301391601563', '1996': '49.3564491271973', '1997': '52.0400810241699', '1998': '53.4020195007324', '1999': '54.5481109619141', '2000': '56.5662117004395', '2001': '58.4893188476563', '2002': '60.0616798400879', '2003': '62.5394287109375', '2004': '64.5786590576172', '2005': '66.9214324951172', '2006': '68.9610595703125', '2007': '70.9542465209961', '2008': '72.3383636474609', '2009': '72.9445495605469', '2010': '73.0819931030273', '2011': '74.2904815673828', '2012': '75.3800430297852', '2013': '76.1621322631836', '2014': '76.7035980224609'}}]
const barData = [{'name': 'East Asia & Pacific', 'data': {'1985': '84.1245193481445', '1986': '87.8373336791992', '1987': '91.9220581054688', '1988': '93.7372207641602', '1989': '93.9624404907227', '1990': '93.6322631835938', '1991': '93.932746887207', '1992': '93.9618301391602', '1993': '93.3827362060547', '1994': '92.6384201049805', '1995': '91.6744995117188', '1996': '91.1676025390625', '1997': '90.8064575195313', '1998': '92.6379318237305', '1999': '94.4030532836914', '2000': '94.7107467651367', '2001': '95.1851425170898', '2002': '97.3135986328125', '2003': '97.0093994140625', '2004': '97.0151672363281', '2005': '94.8832931518555', '2006': '94.4098892211914', '2007': '95.4900817871094', '2008': '95.5239181518555', '2009': '95.8589630126953', '2010': '96.2385482788086', '2011': '96.7340393066406', '2012': '96.4490814208984', '2013': '96.2272872924805', '2014': '96.1948165893555'}}, {'name': 'Europe & Central Asia', 'data': {'1985': '93.260383605957', '1986': '93.8339004516602', '1987': '94.0947799682617', '1988': '94.6430130004883', '1989': '94.4156188964844', '1990': '94.5479202270508', '1991': '94.9383697509766', '1992': '94.7216110229492', '1993': '94.2997589111328', '1994': '94.0606002807617', '1995': '93.9106063842773', '1996': '94.2685470581055', '1997': '94.4388198852539', '1998': '95.267822265625', '1999': '95.6404495239258', '2000': '96.2544403076172', '2001': '97.0691375732422', '2002': '97.5709075927734', '2003': '97.2636795043945', '2004': '97.2881011962891', '2005': '96.47265625', '2006': '96.6062774658203', '2007': '96.7333526611328', '2008': '96.9741668701172', '2009': '96.9070434570313', '2010': '97.232780456543', '2011': '97.3063125610352', '2012': '97.2518692016602', '2013': '97.2910079956055', '2014': '97.0324935913086'}}, {'name': 'Latin America & Caribbean', 'data': {'1985': '90.2231521606445', '1986': '90.2342376708984', '1987': '90.4840316772461', '1988': '90.3486785888672', '1989': '89.7668228149414', '1990': '90.3621520996094', '1991': '90.7398986816406', '1992': '91.5489501953125', '1993': '91.8326034545898', '1994': '91.4325485229492', '1995': '91.4280166625977', '1996': '91.7564392089844', '1997': '92.0613632202148', '1998': '93.7112808227539', '1999': '94.8533935546875', '2000': '95.6178207397461', '2001': '95.6361923217773', '2002': '95.5762329101563', '2003': '94.5808181762695', '2004': '95.0690689086914', '2005': '95.5862808227539', '2006': '95.0551681518555', '2007': '94.6057586669922', '2008': '95.3840789794922', '2009': '95.7433700561523', '2010': '95.8192291259766', '2011': '95.635871887207', '2012': '95.3086090087891', '2013': '94.4047393798828', '2014': '94.1983108520508'}}, {'name': 'Middle East & North Africa', 'data': {'1985': '69.7190399169922', '1986': '71.1042633056641', '1987': '72.4398803710938', '1988': '73.696662902832', '1989': '73.9704666137695', '1990': '76.1109619140625', '1991': '77.4642181396484', '1992': '74.5618133544922', '1993': '75.2038726806641', '1994': '77.5336685180664', '1995': '76.1625595092773', '1996': '78.8595962524414', '1997': '78.8754425048828', '1998': '79.3279418945313', '1999': '79.922477722168', '2000': '81.1122894287109', '2001': '83.7024383544922', '2002': '85.9817962646484', '2003': '87.1251525878906', '2004': '88.4317398071289', '2005': '89.1037063598633', '2006': '89.4705963134766', '2007': '90.7687530517578', '2008': '91.3146591186523', '2009': '91.8878707885742', '2010': '93.3065872192383', '2011': '93.5886001586914', '2012': '94.0756530761719', '2013': '93.5063629150391', '2014': '93.2148666381836'}}, {'name': 'North America', 'data': {'1985': '93.1665496826172', '1986': '94.3982696533203', '1987': '95.9469833374023', '1988': '96.7820587158203', '1989': '97.523551940918', '1990': '98.353630065918', '1991': '98.1745834350586', '1992': '97.2084426879883', '1993': '95.9713134765625', '1994': '95.8835830688477', '1995': '96.8513412475586', '1996': '96.5718765258789', '1997': '97.1731491088867', '1998': '97.7432403564453', '1999': '97.9806289672852', '2000': '97.9390716552734', '2001': '98.1788177490234', '2002': '97.0134506225586', '2003': '96.4151229858398', '2004': '95.4468536376953', '2005': '96.1554107666016', '2006': '97.3998870849609', '2007': '97.9529037475586', '2008': '97.9811019897461', '2009': '97.2676315307617', '2010': '95.4516677856445', '2011': '95.0007095336914', '2012': '94.5527801513672', '2013': '93.1943817138672', '2014': '94.8539505004883'}}, {'name': 'South Asia', 'data': {'1985': '54.9576797485352', '1986': '57.0689697265625', '1987': '55.2817993164063', '1988': '58.2786903381348', '1989': '61.553581237793', '1990': '61.6171913146973', '1991': '62.1618614196777', '1992': '63.3151016235352', '1993': '65.7375183105469', '1994': '67.7680969238281', '1995': '68.2624206542969', '1996': '68.832389831543', '1997': '69.0833969116211', '1998': '68.1686706542969', '1999': '69.4146270751953', '2000': '71.9742889404297', '2001': '72.7294235229492', '2002': '74.2219009399414', '2003': '82.2056503295898', '2004': '84.8079986572266', '2005': '86.843391418457', '2006': '88.7142181396484', '2007': '90.904296875', '2008': '91.6892700195313', '2009': '91.8110427856445', '2010': '92.1827087402344', '2011': '92.0975494384766', '2012': '92.5874099731445', '2013': '92.9084777832031', '2014': '92.9776229858398'}}, {'name': 'Sub-Saharan Africa', 'data': {'1985': '51.7751998901367', '1986': '50.1158790588379', '1987': '49.0073394775391', '1988': '48.3701095581055', '1989': '48.8123817443848', '1990': '48.3278999328613', '1991': '49.4843406677246', '1992': '49.4431495666504', '1993': '50.0093116760254', '1994': '50.3499984741211', '1995': '50.8301391601563', '1996': '49.3564491271973', '1997': '52.0400810241699', '1998': '53.4020195007324', '1999': '54.5481109619141', '2000': '56.5662117004395', '2001': '58.4893188476563', '2002': '60.0616798400879', '2003': '62.5394287109375', '2004': '64.5786590576172', '2005': '66.9214324951172', '2006': '68.9610595703125', '2007': '70.9542465209961', '2008': '72.3383636474609', '2009': '72.9445495605469', '2010': '73.0819931030273', '2011': '74.2904815673828', '2012': '75.3800430297852', '2013': '76.1621322631836', '2014': '76.7035980224609'}}]