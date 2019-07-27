Node JS RestAPI Server
===============

Node js를 이용한 Rest API 서버.<br />
MongoDB를 사용 한다. 전달 데이터는 json 형식으로 전달한다. <br />

Ver.
----
> Node@10.16.0 <br />
> Mongo@Server 4.0 <br />
> Express@4.16.4 <br />
> mongoose@5.6.6 <br />

Server API
----
## id 조회
> path : /id <br />
> parameter : { Id : string } <br />
> return Value : success - { Id, Name, Level, Money} <br />
> fail - error or No Id <br />
## insert 정보 삽입
> path : /insert <br />
> parameter : { Id : string, Name : string } <br />
> option parameter : { Level : number, Money : number} <br />
> return Value : success - { Id, Name, Level, Money} <br />
> fail - error or already exist
## del 유저 삭제
> path : /del <br />
> parameter : { Id : id } <br />
> return Value : success - end <br />
> fail : error or Cant find id
## update 유저 정보 수정
> path : /update <br />
> parameter : { Id : id } <br />