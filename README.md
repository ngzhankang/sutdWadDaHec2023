# sutdWadDaHec2023
SUTD What The Hack! 2023


Building Front-end
---
1. CD to `frontend`
2. Run `npm run re-start`
3. Done!

Loadin Model
--
1. loaded_model = pickle.load(open(filename, 'rb'))
2. result = loaded_model.score(X_test, Y_test)
3. print(result)

4. #In flask
5. #example code-- needs to be tweaked
6. def ValuePredictor(to_predict_list):
7.     to_predict = np.array(to_predict_list).reshape(1, 12)
8.     loaded_model = pickle.load(open("model.pkl", "rb"))
9.     result = loaded_model.predict(to_predict)
10.     return result[0]

11. @app.route('/result', methods = ['POST'])
12. def result():
13.     if request.method == 'POST':
14.         to_predict_list = request.form.to_dict()
15.         to_predict_list = list(to_predict_list.values())
16.         to_predict_list = list(map(int, to_predict_list))
17.         result = ValuePredictor(to_predict_list)
18.         if int(result)== 1:
19.             prediction ='Income more than 50K'
20.         else:
21.             prediction ='Income less that 50K'
22.         return render_template("result.html", prediction = prediction)

                                        
        
   
