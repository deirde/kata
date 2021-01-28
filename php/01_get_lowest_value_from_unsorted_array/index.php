<?php

declare(strict_types=1);

namespace kata {

    use phpDocumentor\Reflection\Types\Mixed_;

    class myClass
    {

        /**
         * @param  mixed  ...$arrs
         *
         * @return mixed
         */
        public function getTheLowestValue(...$arrs)
        {
            return (count($arrs) === 1) ? min($arrs[0]) : min($arrs);
        }
    }
}
