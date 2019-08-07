const contractName = artifacts.require( 'mytoken' );

contract( "mytoken contract test", async function ( accounts ) {
    before( async function () {
        this.contract = await contractName.new();
    })

    describe( "함수 호출 법", function () {
        it( "토큰 이름을 확인하는 함수 호출", async function () {
            var token_name = await this.contract.name();
            console.log( token_name );
        })

        it( "토큰 심볼을 확인하는 함수 호출", async function () {
            var token_symbol = await this.contract.symbol();
            console.log( token_symbol );
        })

        it( "토큰 데시멀을 확인하는 함수 호출", async function () {
            var token_decimals = await this.contract.decimals();
            console.log( parseInt( token_decimals ) );
        })
    })

    describe( "함수 호출 법 - 2", function() {
        it( "파라미터가 존재하는 함수 호출", async function () {
                var account_balance_0 = await this.contract.balanceOf( accounts[ 0 ] );  // ganache-cle에서 accounts를 확인할 수 있다.
                console.log( parseInt( account_balance_0 ) );
                var account_balance_1 = await this.contract.balanceOf( accounts[ 1 ] );
                console.log( parseInt( account_balance_1 ) );
                
                // for( var i=0; i<9; i++ ) {
                //     var account_balance = await this.contract.balanceOf( accounts[ i ] );
                //     console.log( parseInt( account_balance[i] ) );
                // }
        })
    })
})
