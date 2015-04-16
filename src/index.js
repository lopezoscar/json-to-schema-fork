!(function(){

    /**
     * todo 以后可以加上format的判断
     * @param data
     * @returns {String}
     */
        var JSONToSchema = function( data ){

        return JSONToSchema._generator( data );
    };

    /**
     * 对数据进行类型判断，并进行分发。
     * @param data
     * @returns {*}
     */
    JSONToSchema._generator = function( data ){

        if( typeof data === 'string' ){

            if(config && config.textarea && config.textarea.indexOf(key)>-1){
                return this._textAreaGenerator( data );
            }else{
                return this._stringGenerator( data );
            }
        }
        else if( typeof data === 'number' ){
            if( /\./.test( data ) ){
                return this._numberGenerator( data );
            }
            else {
                return this._integerGenerator( data );
            }
        }
        else if( typeof data === 'boolean' ){
            return this._booleanGenerator( data );
        }
        else if( Object.prototype.toString.call( data ).match( 'Null' ) ){
            return this._nullGenerator( data );
        }
        else if( Object.prototype.toString.call( data ).match( 'Array' ) ){
            return this._arrayGenerator( data );
        }
        else if( Object.prototype.toString.call( data ).match( '[object Object]' ) ){
            return this._objectGenerator( data );
        }
        else {
            return undefined;
        }
    };

    /**
     * 对Object类型进行构造
     * @param data
     */
    JSONToSchema._objectGenerator = function( data ){
        var ret = {
            type: 'object',
            title: '',
            properties: {}
        };

        var key;
        var item;

        for( key in data ){
            item = data[ key ];
            ret.properties[ key ] = this._generator( item );
        }

        return ret;
    };

    /**
     * 对数组类型进行构造
     * @param data
     */
    JSONToSchema._arrayGenerator = function( data ){

        // 对于数组，仅仅对第一项进行构造
        var itemsList = [];
        for(var a = 0; a < data.length;a++){
            var item = this._generator( data[a] );
            itemsList.push(item)
        }

        return {
            type: 'array',
            title: '',
            items: itemsList
        };
    };

    /**
     * 对字符串类型进行构造
     * @param data
     */
    JSONToSchema._stringGenerator = function( data ){

        return {
            type: 'string',
            title: '',
            'default':data
        };
    };

    /**
     * Textearea para la wysiwyg
     * @param data
     * @returns {{type: string, format: string, options: {wysiwyg: boolean}}}
     * @private
     */
    JSONToSchema._textAreaGenerator = function( data ){
        return {
            type: 'string',
            format: 'html',
            options: {
                wysiwyg: true
            }
        };
    };

    /**
     * 对number类型进行构造
     * @param data
     */
    JSONToSchema._numberGenerator = function( data ){

        return {
            type: 'number',
            title: '',
            'default':data
        };
    };

    /**
     * 对integer类型进行构造
     * @param data
     */
    JSONToSchema._integerGenerator = function( data ){

        return {
            type: 'integer',
            title: '',
            'default':data
        };
    };

    /**
     * 对null类型进行构造
     * @param data
     */
    JSONToSchema._nullGenerator = function( data ){

        return {
            type: 'null',
            title: ''
        };
    };

    /**
     * 对boolean类型进行构造
     * @param data
     */
    JSONToSchema._booleanGenerator = function( data ){
        return {
            type: 'boolean',
            title: '',
            'default':data
        };
    };

    /**
     * 判断当前JS环境
     */
    var hasDefine = typeof define === 'function';
    var hasExports = typeof module !== 'undefined' && module.exports;

    if( hasExports ){
        module.exports = JSONToSchema;
    }
    else if( hasDefine ){
        define(function(){
            return JSONToSchema;
        });
    }
    else {
        this.JSONToSchema = JSONToSchema;
    }

})();