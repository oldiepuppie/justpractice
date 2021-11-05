# weather-kma

기상청 단기예보 조회서비스 데모

## GET /ultraShortNewForecast

### 현재 상황
- console.log를 이용했을 때
  - xml 조회 가능, 반환은 잘 안 되는듯함
  - xml-js로 xml -> json 변환
    - 예상한 형태로 변환되지 않음
    - convert의 인자로 option까지 넘겨야 원하는대로 동작
- 반환 시도
  - pending만 반환함
    - async, await 사용 후 제대로 동작함
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
  {
    "_declaration": {
        "_attributes": {
            "version": "1.0",
            "encoding": "UTF-8"
        }
    },
    "response": {
        "header": {
            "resultCode": {
                "_text": "00"
            },
            "resultMsg": {
                "_text": "NORMAL_SERVICE"
            }
        },
        "body": {
            "dataType": {
                "_text": "XML"
            },
            "items": {
                "item": [
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "PTY"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "0"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "REH"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "80"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "RN1"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "0"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "T1H"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "13.5"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "UUU"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "-1"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "VEC"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "154"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "VVV"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "2.3"
                        }
                    },
                    {
                        "baseDate": {
                            "_text": "20211105"
                        },
                        "baseTime": {
                            "_text": "0600"
                        },
                        "category": {
                            "_text": "WSD"
                        },
                        "nx": {
                            "_text": "52"
                        },
                        "ny": {
                            "_text": "38"
                        },
                        "obsrValue": {
                            "_text": "2.6"
                        }
                    }
                ]
            },
            "numOfRows": {
                "_text": "10"
            },
            "pageNo": {
                "_text": "1"
            },
            "totalCount": {
                "_text": "8"
            }
        }
    }
  }
  ```