## ACCOUNT-V1

### GET `/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}`

- 소환사 이름(`gameName`)과 태그(`tagLine`)를 사용하여 소환사 계정(`puuid`)을 조회합니다.

```bash
curl -X GET "https://kr.api.riotgames.com/riot/account/v1/accounts/by-riot-id/칼과%20창%20방패/KR1?api_key=$RIOT_API_KEY"

{
    "puuid": [user puuid],
    "gameName": "칼과 창 방패",
    "tagLine": "KR1"
}
```

<br>

## SUMMONER-V4

### GET `/lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}`

- 소환사 계정(`puuid`)를 사용하여 소환사 데이터를 조회합니다.

```bash
curl -X GET "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/$PUUID?api_key=$RIOT_API_KEY"

{
  "id": [summonerId],
  "accountId": [accountId],
  "puuid": [puuid],
  "profileIconId": [profileIconId],
  "revisionDate": [revisionDate],
  "summonerLevel": [summonerLevel]
}
```

## MATCH-V5

### GET `/lol/match/v5/matches/by-puuid/{puuid}/ids`

- 소환사 계정(`puuid`)를 사용하여 소환사가 최근에 참여한 게임 목록을 조회합니다.  
- `start`와 `count` 파라미터를 사용하여 조회할 게임 목록의 시작 인덱스와 개수를 지정할 수 있습니다.
- 한국 서버 MATCH_ID : `KR_0000000000`

```bash
curl -X GET "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/$PUUID/ids?start=0&count=20&api_key=$RIOT_API_KEY"

[
  "MATCH_ID01",
  "MATCH_ID02",
  "MATCH_ID03",
  ...
]
```

### GET `/lol/match/v5/matches/{matchId}`

- 게임 목록(`matchId`)를 사용하여 게임 데이터를 조회합니다.

```bash
curl -X GET "https://asia.api.riotgames.com/lol/match/v5/matches/$MATCH_ID?api_key=$RIOT_API_KEY"

{
    "metadata": {
        "dataVersion": "2",
        "matchId": [matchId],
        "participants": [
            ...
        ]
    },
    "info": {
        ...
    }
}
```
