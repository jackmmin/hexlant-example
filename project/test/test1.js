// 컨트랙트 불러오기
const contractName = artifacts.require( 'mytoken' );    // mytoken 컨트랙트를 불러온다.

// contractEach로 테스트 그룹핑
contract( "mytoken contract test1", async function( [종민, 상아, 진우] ) {  // 종민이 컨트랙트 배포자
    // before로 컨트랙트 배포
    beforeEach( async function() {  // it을 수행할 때마다  수행.
        this.contract = await contractName.new();   // it 이 수행될 때마다 컨트랙트를 새로 배포한다.
    })

    // describe로 시나리오 묶기
    describe( "토큰 기본 정보", function() {
        // it으로 개별 테스트 하나 생성
        it( "토큰 이름이 'mytoken'이어야 한다.", async function() {
            // assert.equal(프로그램 실제 기능 실행, 예상 기대 값, 실패 시 출력 문자열);
            assert.equal( await this.contract.name(), 'mytoken', '토큰 이름이 mytoken이 아닙니다.' );
        })

        it( "토큰 이름이 'mtn' 이어야 한다.", async function() {
            assert.equal( await this.contract.symbol(), 'mtn', '토큰 이름이 mtn이 아닙니다.' );
        })

        // it( "토큰 decimals가 18 이어야 한다.", async function() {
        //     assert.equal( await this.contract.decimals(), 'decimals가 18이 아닙니다.' );
        // })
    })

    describe( "토큰 전송 가능", function() {
        it( "종민이 상아에게 100 값을 전송하면 상아에게는 100의 값이 있다.", async function() {
            assert.equal( await this.contract.balanceOf( 상아 ), '0', "토큰이 0이 아닙니다." );
            await this.contract.transfer( 상아, 100, { from: 종민 } );
            assert.equal( await this.contract.balanceOf( 상아 ), '100', "토큰이 100이 아닙니다." );
        })
    })
})