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
    to_predict = np.array(to_predict_list).reshape(1, 12)
    loaded_model = pickle.load(open("model.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]

7. @app.route('/result', methods = ['POST'])
8. def result():
    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(int, to_predict_list))
        result = ValuePredictor(to_predict_list)       
        if int(result)== 1:
            prediction ='Income more than 50K'
        else:
            prediction ='Income less that 50K'           
        return render_template("result.html", prediction = prediction)
   
