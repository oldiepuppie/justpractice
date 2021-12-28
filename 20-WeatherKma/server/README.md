# WeatherKma - server

기상청 단기예보 조회서비스 데모용 서버.
axios 요청으로 기상청 데이터를 받아와서 클라이언트의 요청에 따라 데이터를 전달합니다.

[**[공공데이터포털 오픈 API] 기상청_단기예보 조회서비스**](https://www.data.go.kr/data/15084084/openapi.do)

## GET /ultraShortNewForecast

### 진행 상황
- console.log를 이용했을 때
  - xml 조회 가능, 반환은 잘 안 되는듯함
  - **xml-js**로 xml -> json 변환
    - 예상한 형태로 변환되지 않음
      - convert의 인자로 option까지 넘겨야 원하는대로 동작
    - **쿼리에 데이터 타입을 추가해서 JSON 형식의 데이터 조회 성공**
      - xml-js가 필요없어짐
- 반환 시도
  - pending만 반환함
    - **async, await 사용 후 제대로 동작함**
- NodeJS는 commonJS  
### 응답 예시
- **xml**
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <response>
    <header>
        <resultCode>00</resultCode>
        <resultMsg>NORMAL_SERVICE</resultMsg>
    </header>
    <body>
        <dataType>XML</dataType>
        <items>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>PTY</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>0</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>REH</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>80</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>RN1</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>0</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>T1H</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>13.5</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>UUU</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>-1</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>VEC</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>154</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>VVV</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>2.3</obsrValue>
          </item>
          <item>
              <baseDate>20211105</baseDate>
              <baseTime>0600</baseTime>
              <category>WSD</category>
              <nx>52</nx>
              <ny>38</ny>
              <obsrValue>2.6</obsrValue>
          </item>
        </items>
        <numOfRows>10</numOfRows>
        <pageNo>1</pageNo>
        <totalCount>8</totalCount>
    </body>
  </response>
  ```

- **json**
	```json
	// 20211106160513
	// http://localhost:process.env.PORT/ultraShortNewForecast
	{
		"response": {
			"header": {
				"resultCode": "00",
				"resultMsg": "NORMAL_SERVICE"
			},
			"body": {
				"dataType": "JSON",
				"items": {
					"item": [
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "PTY",
							"nx": 52,
							"ny": 38,
							"obsrValue": "0"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "REH",
							"nx": 52,
							"ny": 38,
							"obsrValue": "68"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "RN1",
							"nx": 52,
							"ny": 38,
							"obsrValue": "0"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "T1H",
							"nx": 52,
							"ny": 38,
							"obsrValue": "18.4"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "UUU",
							"nx": 52,
							"ny": 38,
							"obsrValue": "-1.8"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "VEC",
							"nx": 52,
							"ny": 38,
							"obsrValue": "105"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "VVV",
							"nx": 52,
							"ny": 38,
							"obsrValue": "0.5"
						},
						{
							"baseDate": "20211106",
							"baseTime": "0600",
							"category": "WSD",
							"nx": 52,
							"ny": 38,
							"obsrValue": "2"
						}
					]
				},
				"pageNo": 1,
				"numOfRows": 10,
				"totalCount": 8
			}
  	}
	}
	```
